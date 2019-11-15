import { stringify } from 'query-string';
import {
    fetchUtils,
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
} from 'ra-core';

export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
    /**
     * This data provider is responsible to translating the actions emitted by ra-core and performing HTTP requests that make sense to the swagger API
     *
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'action-track'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} { url, options } The HTTP request parameters
     */
    const convertDataRequestToHTTP = (type, resource, params) => {
        let url = '';
        let data = {};
        const options = {
            headers: new Headers({ withCredentials: 'true' }),
            credentials: "include",
        };
        switch (type) {
            case GET_LIST: {
                const { page, perPage: per_page } = params.pagination;
                const { field: sort_by_field, order: sort_by_order } = params.sort;
                const query = {
                    page: JSON.stringify(page),
                    per_page: JSON.stringify(per_page),
                    sort_by_field: sort_by_field,
                    sort_by_order: sort_by_order,
                    filter: JSON.stringify(params.filter)
                };
                url = `${apiUrl}/${resource}/?${stringify(query)}`;
                break;
            }
            case GET_ONE:
                url = `${apiUrl}/${resource}/${params.id}`;
                break;
            case GET_MANY: {
                url = `${apiUrl}/${resource}/get-many/${params.ids.join(",")}`;
                break;
            }
            case GET_MANY_REFERENCE: {
                const { page, perPage: per_page } = params.pagination;
                const { field: sort_by_field, order: sort_by_order } = params.sort;
                //this query needs to be updated.  not sure where this is used quite yet
                const query = {
                    sort: JSON.stringify([sort_by_field, sort_by_order]),
                    range: JSON.stringify([
                        (page - 1) * per_page,
                        page * per_page - 1,
                    ]),
                    filter: JSON.stringify({
                        ...params.filter,
                        [params.target]: params.id,
                    }),
                };
                url = `${apiUrl}/${resource}?${stringify(query)}`;
                break;
            }
            case UPDATE:
                url = `${apiUrl}/${resource}/${params.id}`;
                options.method = 'PUT';
                options.body = JSON.stringify({data: params.data});
                break;
            case UPDATE_MANY:
                url = `${apiUrl}/${resource}`;
                options.method = 'PUT';
                options.body = JSON.stringify(params);
                break;
            case CREATE:
                url = `${apiUrl}/${resource}`;
                options.method = 'POST';
                options.body = JSON.stringify(params);
                break;
            case DELETE:
                url = `${apiUrl}/${resource}/${params.id}`;
                options.method = 'DELETE';
                break;
            case DELETE_MANY:
                url = `${apiUrl}/${resource}/delete-many/${params.ids.join(",")}`;
                options.method = 'DELETE';
                break;
            default:
                throw new Error(`Unsupported fetch action type ${type}`);
        }
        return { url, options };
    };

    /**
     * @param {Object} response HTTP response from fetch()
     * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Object} Data response
     */
    const convertHTTPResponse = (response, type, resource, params) => {
        const { headers, json } = response;
        switch (type) {
            case GET_LIST:
              return json;
            case GET_ONE:
              return {data: json.data[0]};

            case GET_MANY:
              return json;

            //unsure yet if this is needed
            case GET_MANY_REFERENCE:
                if (!headers.has('content-range')) {
                    throw new Error(
                        'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                    );
                }
                return {
                    data: json,
                    total: parseInt(
                        headers
                            .get('content-range')
                            .split('/')
                            .pop(),
                        10
                    ),
                };
            case CREATE:
                return json;
            case UPDATE:
                return {data: json.data[0]};
            case UPDATE_MANY:
                return json;
            case DELETE: {
                return { data: []};
            }
            case DELETE_MANY: {
                return { data: []};
            }
            default:
                return { data: json };
        }
    };

    /**
     * @param {string} type Request type, e.g GET_LIST
     * @param {string} resource Resource name, e.g. "posts"
     * @param {Object} payload Request parameters. Depends on the request type
     * @returns {Promise} the Promise for a data response
     */
    return (type, resource, params) => {
        const { url, options } = convertDataRequestToHTTP(
            type,
            resource,
            params
        );
        return httpClient(url, options).then(response =>
            convertHTTPResponse(response, type, resource, params)
        );
    };
};

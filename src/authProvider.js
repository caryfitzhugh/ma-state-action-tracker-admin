import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import endpoint from './endpoint';

export default (type, params) => {
    //user will get a cookie on authentication
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(`${endpoint}/sign_in?username=${username}&password=${password}`, 
        {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json'})
        })
        return fetch(request)
            .then(res => {
                if (res.msg !== 'OK') {
                    throw new Error('User could not be authenticated. Please check your username and password and try again.');
                }
                return  Promise.resolve();
            })
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        const delete_cookie = (name) => {
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        };
        delete_cookie('rack.session');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            const delete_cookie = (name) => {
                document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            };
            delete_cookie('rack.session');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        const getCookie = (cname) => {
            const name = cname + "=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(';');
            for(const i = 0; i <ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
        const cookie = getCookie("rack.session");
        if (cookie != "")
            Promise.resolve();
        else
            Promise.reject();
    }
    return Promise.reject('Unknown method');
};

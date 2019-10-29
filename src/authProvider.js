import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import endpoint from './endpoint';

export default (type, params) => {
    //on 200 response, user will be authenticated
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(`${endpoint}/sign_in?username=${username}&password=${password}`, 
        {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json'}),
            credentials: 'include'
        })
        return fetch(request)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('User could not be authenticated. Please check your username and password and try again.');
                }
                return Promise.resolve();
            })
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        const request = new Request(`${endpoint}/sign_out`, 
        {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json'}),
            credentials: 'include'
        })
        return fetch(request)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('User could not be sgned out. Please try again.');
                }
                return Promise.resolve();
            })
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new route
    if (type === AUTH_CHECK) {
        const request = new Request(`${endpoint}/logged_in`, {
            headers: new Headers({'Content-Type': 'application/json'}),
            credentials: 'include'
        })
        return fetch(request)
            .then(res => res.json())
            .then(data => {
                if (data.logged_in === false)
                    throw new Error('Authentication failure. Please log in again.')
                else
                    return Promise.resolve();
            })
    }
    return Promise.reject('Unknown method');
};

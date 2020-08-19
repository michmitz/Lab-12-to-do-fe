import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
    try {
        return request.post(`${URL}/auth/signup`, userData)
    } catch (e) {
        throw { error: e.message }
    }
}

export function signIn(userData) {
    try {
        return request.post(`${URL}/auth/signin`, userData)
    } catch (e) {
        throw { error: e.message }
    }
}
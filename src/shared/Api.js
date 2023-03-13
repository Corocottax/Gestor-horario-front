import axios from 'axios';

export const headers = (contentType) => {

    return {
        'Accept': 'application/json',
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Authorization': {
            toString () {
                return `Bearer ${localStorage.getItem('token')}`
            }
        }
    };

}

export const API = (contentType) => {
    return axios.create({
        baseURL: process.env.REACT_APP_BACK_URL,
        headers: headers(contentType)
    })
}
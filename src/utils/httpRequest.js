import axios from 'axios';
const token = localStorage.getItem('token');
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content-type': 'application/json',
    },
});

const getByToken = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export const post = async (path, options = {}) => {
    const response = await httpRequest.post(path, options);
    return response.data;
};

export const getToken = async (path, token) => {
    const response = await getByToken.get(path, token);
    return response.data;
};

export const postToken = async (path, token) => {
    const response = await getByToken.post(path, token);
    return response.data;
};

export default httpRequest;

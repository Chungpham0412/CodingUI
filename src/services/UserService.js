import * as httpRequest from '@utils/httpRequest';

export const login = async (datas) => {
    const res = await httpRequest.post('api/login', datas);
    return res;
};
export const getUser = async (token) => {
    const res = await httpRequest.getToken('api/getUser', token);
    return res;
};

export const logout = async (token) => {
    const res = await httpRequest.postToken('api/logout', token);
    return res;
};

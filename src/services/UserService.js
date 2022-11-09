import * as httpRequest from '@utils/httpRequest';

export const login = async (datas) => {
    const res = await httpRequest.post('api/login', datas);
    return res;
};
export const getUser = async (datas) => {
    const res = await httpRequest.getUser('api/getUser', datas);
    return res;
};

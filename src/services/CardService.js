import * as httpRequest from '@utils/httpRequest';

export const getCardByFilterId = async (id = 0) => {
    try {
        const res = await httpRequest.get(`api/card/getCardByFilterId/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};
export const getCards = async () => {
    try {
        const res = await httpRequest.get('api/card');
        return res;
    } catch (error) {
        console.log(error);
    }
};

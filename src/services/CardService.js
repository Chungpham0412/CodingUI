import * as httpRequest from '@utils/httpRequest';

export const getCardByFilterId = async () => {
    try {
        const res = await httpRequest.get('api/card/getCardByFilterId/3');
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

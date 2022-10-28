import * as httpRequest from '@utils/httpRequest';

export const getFilters = async () => {
    try {
        const res = await httpRequest.get('api/filter');
        return res;
    } catch (error) {
        console.log(error);
    }
};

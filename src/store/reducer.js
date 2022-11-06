import { SET_FILTER } from './contants';

const initState = {
    filter: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };
        default:
            throw new Error('Invalid Filter');
    }
}

export { initState };
export default reducer;

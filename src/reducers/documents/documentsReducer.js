import { types } from "../../types/types";

const initialState = {
    document: {
        url: '',
    },
};
export const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DOCUMENTS:
            return ({
                document: {
                    url: action.payload.url,
                    category: action.payload.category
                }
            })
        default:
            return state;
    }
};

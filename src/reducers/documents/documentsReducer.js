import { types } from "../../types/types";

const initialState = {
    document: {
        url: '',
    },
    userDocs : []
};
export const documentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DOCUMENTS:
            return ({
                ...state,
                document: {
                    url: action.payload.url,
                    category: action.payload.category
                }
            })
        case types.GET_DOCUMENT_SUCCESS:
        return({
            ...state,
            userDocs: action.payload,
        })
        default:
            return state;
    }
};

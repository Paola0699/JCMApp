import { types } from "../../types/types";

const initialState = {
    document: {
        url: '',
    },
    userDocuments : []
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
            userDocuments: action.payload,
        })
        default:
            return state;
    }
};

import { types } from "../../types/types";

const initialState = {
    user: {
        uid: '',
        type: '',
        name: '',
    },
    error: {
        code: '',
        message: '',
    },
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DATA_SUCCESS:
            return {
                user: action.payload,
                error: initialState.error,
            }
        case types.GET_DATA_FAILURE:
            return {
                error: action.payload,
                ...state
            }
        default:
            return state;
    }
};

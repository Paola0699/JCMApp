import { userLogin } from "../services/loginService";
import { types } from "../types/types";

export const userAuth = (USER, PASSWORD) => {
    return async (dispatch) => {
        const response = await userLogin(USER, PASSWORD);
        if (response.code) dispatch(getDataFailure(response));
        if (response.uid) dispatch(getDataSuccess(response));
    }
}
export const getDataSuccess = (user) => ({
    type: types.GET_DATA_SUCCESS,
    payload: user,
});

export const getDataFailure = (error) => ({
    type: types.GET_DATA_FAILURE,
    payload: error,
});
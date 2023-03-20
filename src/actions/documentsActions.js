import { types } from "../types/types";

export const getDocuments = (url) => ({
    type: types.GET_DOCUMENTS,
    payload: url,
});

export const getSelectedUser = (user) => ({
    type: types.GET_SELECTED_USER,
    payload: user
});
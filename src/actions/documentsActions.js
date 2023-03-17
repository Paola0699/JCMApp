import { types } from "../types/types";

export const getDocuments = (url) => ({
    type: types.GET_DOCUMENTS,
    payload: url,
});
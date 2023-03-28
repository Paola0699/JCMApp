import { getUserDocuments } from '../services/usersService';
import { types } from '../types/types';

export const startGetDocumentsSuccess = (idUsuario) => {
  return async (dispatch) => {
    const response = await getUserDocuments(idUsuario);
    dispatch(getUserDocumentsSuccess(response));
  };
};
export const getUserDocumentsSuccess = (documents) => ({
  type: types.GET_DOCUMENT_SUCCESS,
  payload: documents
});

export const updateDocumentSuccess = (document) => ({
  type: types.UPDATE_DOCUMENT_SUCCESS,
  payload: document
});

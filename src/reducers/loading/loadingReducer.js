import { types } from '../../types/types';

const initialState = {
  loadingUsers: false,
  loadingAlerts: false,
  loadingUserDetails: false,
  loadingDocumentTypes: false,
  loadingDocumentCategories: false
};
export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING_USERS:
      return {
        ...state,
        loadingUsers: action.payload
      };
    case types.SET_LOADING_ALERTS:
      return {
        ...state,
        loadingAlerts: action.payload
      };
    case types.SET_LOADING_USER_DETAILS:
      return {
        ...state,
        loadingUserDetails: action.payload
      };
    case types.SET_LOADING_DOCUMENT_TYPES:
      return {
        ...state,
        loadingDocumentTypes: action.payload
      };
    case types.SET_LOADING_DOCUMENT_CATEGORIES:
      return {
        ...state,
        loadingDocumentCategories: action.payload
      };
    default:
      return state;
  }
};

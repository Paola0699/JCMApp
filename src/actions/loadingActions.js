import { types } from '../types/types';

export const setLoadingUsers = (status) => ({
  type: types.SET_LOADING_USERS,
  payload: status
});

export const setLoadingDocumentTypes = (status) => ({
  type: types.SET_LOADING_DOCUMENT_TYPES,
  payload: status
});

export const setLoadingDocumentCategories = (status) => ({
  type: types.SET_LOADING_DOCUMENT_CATEGORIES,
  payload: status
});

export const setLoadingUserDetails = (status) => ({
  type: types.SET_LOADING_USER_DETAILS,
  payload: status
});

export const setLoadingAlerts = (status) => ({
  type: types.SET_LOADING_ALERTS,
  payload: status
});

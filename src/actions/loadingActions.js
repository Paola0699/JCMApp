import { types } from '../types/types';

export const setLoadingUsers = (status) => ({
  type: types.SET_LOADING_USERS,
  payload: status
});

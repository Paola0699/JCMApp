import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { documentsReducer } from './documents/documentsReducer';
import { loadingReducer } from './loading/loadingReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  documents: documentsReducer,
  loading: loadingReducer
});

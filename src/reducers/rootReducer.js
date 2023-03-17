import { combineReducers } from "redux";
import { authReducer } from "./auth/authReducer";
import { documentsReducer } from "./documents/documentsReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    documents: documentsReducer,
});

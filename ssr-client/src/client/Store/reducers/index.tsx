import { combineReducers } from "redux";
import { FetchCurrentUserReducer } from "./current-user";
import { FetchAllAccounts } from './fetch-all-accounts';
import { ImageUploadReducer } from "./image-upload";

const rootReducer = combineReducers({
  currentUser: FetchCurrentUserReducer ,
  fetchAllAccounts: FetchAllAccounts
});

export default rootReducer;

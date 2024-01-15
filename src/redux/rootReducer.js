// import {comb} from 'redux';
// import { combineReducers } from 'redux'
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";
import authReducer from "./slices/auth";
import audioCallReducer from "./slices/audioCall";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whilelist: [],
  // blacklist: []
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  audioCall: audioCallReducer
});

export { rootPersistConfig, rootReducer };

import { combineReducers } from "redux";
import userReducer from "./userReducer";
import moduleReducer from './moduleReducer';

const allReducers = combineReducers({
  user: userReducer,
  module: moduleReducer,
});

export default allReducers;

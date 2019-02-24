import {combineReducers} from "redux";
import { connectRouter } from "connected-react-router";

import patients from './Patients/patients'


export const reducers = function (history) {
  return combineReducers({
    router: connectRouter(history),
    patients
  });
}

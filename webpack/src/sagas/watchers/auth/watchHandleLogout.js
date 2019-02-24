import { take, put, call, fork } from 'redux-saga/effects';
import * as ActionTypes from '../../../actions';
import LeadersInMedicine from '../../../api/LeadersInMedicine';

let api = new LeadersInMedicine()

export default function* watchHandleLogout () {
  while(true) {
    const logoutAction = yield take(ActionTypes.HANDLE_LOGOUT);
  }
}

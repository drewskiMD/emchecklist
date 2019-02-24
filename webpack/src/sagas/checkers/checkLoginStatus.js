import { call, fork, put, select} from 'redux-saga/effects';
import { fromJS } from 'immutable';
import * as ActionTypes from '../../actions';
import {push } from 'connected-react-router';
import LeadersInMedicine from '../../api/LeadersInMedicine';

let api = new LeadersInMedicine();

export default function* checkLoginStatus () {
  const selectLocation = yield select((state) => state.router.location.pathname)
  const apiLoginCheckResponse = yield api.handleGetRequest('api/auth/login');
  const apiLoginCheckResponseImmutable = fromJS(apiLoginCheckResponse);
  if (apiLoginCheckResponseImmutable.get('loggedOn')) {
    console.log(selectLocation)
    const putLoggedIn = yield put({type: ActionTypes.LOGIN_SUCCESSFUL, user: apiLoginCheckResponseImmutable.get('user')})
    if (selectLocation === '/' || selectLocation === '/sign_in') {
      yield put(push('/overview'))
    }
  } else {
    yield put({type: ActionTypes.STORE_PREVIOUS_LOCATION, location: selectLocation})
    yield put({type: ActionTypes.LOADED})
    yield put(push('/sign_in'))
  }

}

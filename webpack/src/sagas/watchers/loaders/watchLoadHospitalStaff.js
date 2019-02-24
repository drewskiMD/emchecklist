import {call, fork, put, take, select} from 'redux-saga/effects';
import * as ActionTypes from '../../../actions';
import LeadersInMedicine from '../../../api/LeadersInMedicine';
import { fromJS, List } from 'immutable';
import {push } from 'connected-react-router';

let api = new LeadersInMedicine();

export default function* watchLoadHospitalStaff() {
  while(true) {
    const loadHospitalStaff = yield take(ActionTypes.LOAD_HOSPITAL_STAFF);
    const apiResponse = yield api.handleGetRequest('api/hospital_staff')
    const apiResponseImmutable = fromJS(apiResponse)
    if (apiResponseImmutable.get('errors').size === 0) {
      const putApiResponse = yield put({type: ActionTypes.GET_RESPONSE_HOSPITAL_STAFF, hospitalStaff: apiResponseImmutable.get('hospitalStaff')})
    }
  }

}

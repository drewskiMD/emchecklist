import { call, fork, put, take} from 'redux-saga/effects';
import * as ActionTypes from '../../../actions';

export default function* watchMountOverviewContainer () {
  while (true) {
    const watchAction = yield take(ActionTypes.MOUNT_OVERVIEW_CONTAINER);
    const putLoadHospitalStaff = yield put({
      type: ActionTypes.LOAD_HOSPIATL_STAFF
    })
  }
}

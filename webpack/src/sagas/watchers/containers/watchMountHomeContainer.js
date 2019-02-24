import { call, fork, put, take} from 'redux-saga/effects';
import * as ActionTypes from '../../../actions';

import watchHandleSignin from '../../watchers/auth/watchHandleSignIn';

export default function* watchMountHomeContainer () {
  while (true) {
    const watchAction = yield take(ActionTypes.MOUNT_HOME_CONTAINER);
  }
}

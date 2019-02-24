import { call, fork, put, take} from 'redux-saga/effects';
import * as ActionTypes from '../../../actions';

import watchHandleSignin from '../../watchers/auth/watchHandleSignIn';

export default function* watchMountLoginContainer () {
  while (true) {
    const watchMount = yield take(ActionTypes.MOUNT_LOGIN_CONTAINER);
    const watchHandleSigin = yield fork(watchHandleSignin);

    const watchUnmount = yield take(ActionTypes.UNMOUNT_LOGIN_CONTAINER);
  }
}

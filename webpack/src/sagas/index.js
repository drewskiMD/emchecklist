import { fork, call } from 'redux-saga/effects';

import watchEmailListSignUp from './watchers/api/watchEmailListSignUp';

export function* sagas() {
  yield fork(watchEmailListSignUp)
}


export default sagas

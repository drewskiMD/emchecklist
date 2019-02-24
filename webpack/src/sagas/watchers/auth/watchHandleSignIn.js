import {call, fork, put, take, select} from 'redux-saga/effects';
import * as ActionTypes from '../../../actions';
import LeadersInMedicine from '../../../api/LeadersInMedicine';
import { fromJS, List } from 'immutable';
import {push } from 'connected-react-router';

let api = new LeadersInMedicine();

export default function* watchHandleSignIn() {
  while(true) {
    const loginAction = yield take(ActionTypes.HANDLE_SIGNIN);
    if (loginAction.email && loginAction.password) {
      const postData = {
        email: loginAction.email,
        password: loginAction.password
      }
      const apiResposne = yield api.handlePostRequest('api/auth/login', postData)
      const apiResponseImmutable = fromJS(apiResposne)
      console.log(apiResponseImmutable)
      if (apiResponseImmutable.get('loggedOn')) {
        const putLoginResult = yield put(
          {
            type: ActionTypes.LOGIN_SUCCESSFUL,
            user:apiResponseImmutable.get('user')
          })
      } else {
        let loginErrors = apiResponseImmutable.get("errors")
        if (loginErrors.size > 0) {
          const putError = yield put(
            {
              type: ActionTypes.LOGIN_UNSUCCESSFUL,
              errors: loginErrors
            }
          )
        } else {
          const putError = yield put({
            type: ActionTypes.LOGIN_SUCCESSFUL,
            errors: loginErrors
          });
          const selectUI = yield select((state) => state.ui);
          const previousLocationBeforeLogin = selectUI.get("previousLocationBeforeLogin")

          if (previousLocationBeforeLogin === '/' || previousLocationBeforeLogin === '/sign_in') {
            yield put(push('/overview'))
          } else {
            yield put(push(previousLocationBeforeLogin));
          }
        }
      }
    }
  }

}

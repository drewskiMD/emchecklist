import {call, fork, put, take, select} from 'redux-saga/effects';
import * as ActionTypes from '../../../actions';
import LeadersInMedicine from '../../../api/LeadersInMedicine';
import { fromJS, List } from 'immutable';
import {push } from 'connected-react-router';

let api = new LeadersInMedicine();

export default function* watchEmailListSignUp() {
  while(true) {
    const postEmailListSignUp = yield take(ActionTypes.POST_EMAIL_LIST_SIGN_UP);
    const apiResponse = yield api.handlePostRequest('api/email_list_sign_up', postEmailListSignUp['json']);
    const apiResponseImmutable = fromJS(apiResponse)
    if (apiResponseImmutable.get('errors').size === 0) {
      const putApiResponse = yield put({type: ActionTypes.POST_RESPONSE_EMAIL_LIST_SIGN_UP_SUCCESSFUL, emailListSignUp: apiResponseImmutable.get('added').get('emailListSignUps').get(0)})
    } else {
        const putErrors = yield put({type: ActionTypes.POST_RESPONSE_EMAIL_LIST_SIGN_UP_ERROR, errors: apiResponseImmutable.get('errors') })
    }
  }

}

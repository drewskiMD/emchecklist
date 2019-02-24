import {Map, List} from 'immutable';

import * as ActionTypes from '../../actions';

const initialState = Map({
  loading: true,
  previousLocationBeforeLogin: null
})

function ui(state = initialState, action) {
  switch(action.type) {
    case ActionTypes.LOADED:
      return state.update("loading", () => false)
    case ActionTypes.HANDLE_SIGNIN:
      return state.update("loading", () => true)
    case ActionTypes.LOGIN_SUCCESSFUL:
      return state.update("loading", () => false)
    case ActionTypes.STORE_PREVIOUS_LOCATION:
      return state.update("previousLocationBeforeLogin", (value) => action.location)
    default:
      return state
  }
}

export default ui

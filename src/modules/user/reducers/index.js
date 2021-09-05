import * as types from '../actions/types';
import { initialState } from '../../../reducers/initialState';

export default (state = initialState.user, action) => {
  switch (action.type) {
    case types.SET_USER_LOGGED_IN:
      return {
        ...state,
        userIsLoggedIn: action.userIsLoggedIn,
      };
    case types.SET_USER_LOGGED_OUT:
      return {
        ...state,
        userIsLoggedIn: action.userIsLoggedIn,
      };
    default:
      return state;
  }
};

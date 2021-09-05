import firebase from 'firebase';
import * as types from './types';

export function setUserLoggedIn(email, password) {
  return async (dispatch) => {
    let userIsLoggedIn = false;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          userIsLoggedIn = userCredential.user.email;
        });
      return dispatch({
        type: types.SET_USER_LOGGED_IN,
        userIsLoggedIn,
      });
    } catch (error) {
      return dispatch({
        type: types.SET_USER_LOGGED_IN,
        userIsLoggedIn,
      });
    }
  };
}

export function setUserLoggedOut() {
  return async (dispatch) => {
    let userIsLoggedIn = false;
    try {
      await firebase
        .auth()
        .signOut()
        .then(() => {
          userIsLoggedIn = false;
        });
      return dispatch({
        type: types.SET_USER_LOGGED_OUT,
        userIsLoggedIn,
      });
    } catch (error) {
      return dispatch({
        type: types.SET_USER_LOGGED_OUT,
        userIsLoggedIn,
      });
    }
  };
}

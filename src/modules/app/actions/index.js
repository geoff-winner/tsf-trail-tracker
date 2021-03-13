import 'firebase/database';
import firebase from 'firebase';
import * as types from './types';
const noData = {};

export function getTrailConditions() {
  return async dispatch => {
    try {
      const trailData = await firebase.database().ref('trailList').get().then(function(snapshot) {
        if (snapshot.exists()) {
          return snapshot.val();
        }
        else {
          dispatch({
            type: types.SET_TRAIL_CONDITIONS,
            noData
          });
        }
      });
      dispatch({
        type: types.SET_TRAIL_CONDITIONS,
        trailData,
      });
    } catch (error) {
      return error;
    }
  }
}

export function updateTrailConditions(trailNumber, trailValueBeingUpdated, newValue) {
  return async dispatch => {
    try {
      const index = trailNumber - 1;
      const updatedValue =  await firebase.database().ref('trailList').child(index).update({
        trailValueBeingUpdated: newValue,
      });
    } catch (error) {
      return error;
    }
  }
}

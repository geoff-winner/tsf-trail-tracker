import 'firebase/database';
import firebase from 'firebase';
import * as types from './types';

export function getTrailConditions() {
  const noData = {};
  return async (dispatch) => {
    try {
      const trailData = await firebase
        .database()
        .ref('trailList')
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            return snapshot.val();
          }
          return dispatch({
            type: types.SET_TRAIL_CONDITIONS,
            noData,
          });
        });
      return dispatch({
        type: types.SET_TRAIL_CONDITIONS,
        trailData,
      });
    } catch (error) {
      return error;
    }
  };
}

export function updateTrailConditions(
  index,
  trailNumber,
  trailName,
  trailDifficulty,
  trailStatus,
  trailCondition,
  lastVisitedDate,
) {
  return async (dispatch) => {
    try {
      await firebase.database().ref('trailList').child(index).update({
        trailNumber,
        trailName,
        trailDifficulty,
        trailStatus,
        trailCondition,
        lastVisitedDate,
      });
      const trailRef = await firebase.database().ref('trailList').child(index);
      trailRef.on('value', (snapshot) => {
        const updatedTrailData = snapshot.val();
        return dispatch({
          type: types.UPDATE_TRAIL_CONDITIONS,
          updatedTrailData,
        });
      });
      return null;
    } catch (error) {
      return error;
    }
  };
}

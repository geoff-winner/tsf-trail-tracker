import * as types from '../actions/types';
import { initialState } from '../../../reducers/initialState';

export default (state = initialState.app, action) => {
  switch (action.type) {
    case types.SET_TRAIL_CONDITIONS:
      return {
        ...state,
        trailConditions: [...state.trailConditions, ...action.trailData],
      };
    case types.UPDATE_TRAIL_CONDITIONS:
      return {
        ...state,
        trailConditions: [
          ...state.trailConditions.slice(0, action.updatedTrailData.id),
          action.updatedTrailData,
          ...state.trailConditions.slice(action.updatedTrailData.id + 1),
        ],
      };
    default:
      return state;
  }
};

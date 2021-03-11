import * as types from '../actions/types';
import { initialState } from '../../../reducers/initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRAIL_CONDITIONS:
      return {
        ...state,
        trailConditions: [
          ...state.trailConditions,
          ...action.trailData,
        ],
      };
    default:
      return state;
  }
}

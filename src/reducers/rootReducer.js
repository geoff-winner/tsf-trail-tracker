import { combineReducers } from 'redux';
import app from '../modules/app/reducers';

const appReducer = combineReducers({ app });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

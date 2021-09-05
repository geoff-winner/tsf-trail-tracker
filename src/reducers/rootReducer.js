import { combineReducers } from 'redux';
import app from '../modules/app/reducers';
import user from '../modules/user/reducers';

const appReducer = combineReducers({ app, user });

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

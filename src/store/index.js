import configureStore from './configureStore';
import { initialState } from '../reducers/initialState';

const { store } = configureStore(initialState);

export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Thunk middleware allows actions to be chained and waited on by returning
// a function from that action
// https://github.com/gaearon/redux-thunk
import thunk from 'redux-thunk';

// Reducers
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk)),
  );
  return { store };
}

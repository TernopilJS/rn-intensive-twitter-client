import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import appReducer from './modules';

let store = null; // eslint-disable-line

const config = {
  key: 'root',
  storage,
  whitelist: ['settings'],
};

const reducer = persistCombineReducers(config, appReducer);

if (__DEV__) { // eslint-disable-line
  store = createStore(
    reducer,
    {},
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );
} else {
  store = createStore(
    reducer,
    {},
    applyMiddleware(thunk),
  );
}

export default store;

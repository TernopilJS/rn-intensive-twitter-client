import { createStore } from 'redux';
import appReducer from './modules';

const store = createStore(
  appReducer,
);

export default store;

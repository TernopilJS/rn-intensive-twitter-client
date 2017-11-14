import { combineReducers } from 'redux';
import app from './app';
import navigator from './navigator';
import settings from './settings';

const appReducer = combineReducers({
  app,
  navigator,
  settings,
});

export default (state, action) => {
  // if (action.type === authTypes.SIGN_OUT) {
  //   state = { app: state.app }; // eslint-disable-line no-param-reassign
  // }

  return appReducer(state, action);
};

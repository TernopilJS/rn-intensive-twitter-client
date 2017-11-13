import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isImagesLoaded: false,
  initialized: false,
};

const mergeIn = (stateChange) =>
  (state, action) => ({
    ...state,
    ...(stateChange(action, state)),
  });

const authReducer = handleActions({
  [types.IMAGES_LOADED]: mergeIn(action => ({ isImagesLoaded: action.payload })),
}, initialState);

export default authReducer;

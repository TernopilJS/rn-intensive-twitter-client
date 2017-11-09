import { handleActions } from 'redux-actions';
import types from './types';

const initialState = {
  isImagesLoaded: false,
};
import { mergeIn } from '../../utils/stateHelpers';

const authReducer = handleActions({
  [types.IMAGES_LOADED]: mergeIn(action => ({ isImagesLoaded: action.payload })),
}, initialState);

export default authReducer;

import { handleActions } from 'redux-actions';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialState = {
  twitterToken: null,
};

const settingsReducer = handleActions({
  [types.SET_PROP]: mergeIn(action => action.payload),
}, initialState);

export default settingsReducer;

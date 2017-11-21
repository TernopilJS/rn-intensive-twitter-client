import { handleActions } from 'redux-actions';
import { REHYDRATE, PURGE } from 'redux-persist/lib/constants';
import R from 'ramda';

import { mergeIn } from '../../utils/stateHelpers';
import types from './types';

const initialState = {
  consumerKey: null,
  consumerSecret: null,
  bearerToken: null,
};

const settingsReducer = handleActions({
  [types.SET_PROP]: mergeIn(action => action.payload),
  [REHYDRATE]: mergeIn(action => R.pathOr(initialState, ['payload', 'settings'], action)),
  [PURGE]: mergeIn(initialState),
}, initialState);

export default settingsReducer;

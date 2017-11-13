import R from 'ramda';
import * as types from './types';

const INITIAL_STATE = {
  twitterToken: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_PROP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

import types from './types';
import appTypes from '../app/types';

export const setSettingsProps = (params) => async (dispatch, getState) => {
  dispatch({
    type: types.SET_PROP,
    payload: params,
  });

  const { initialized } = getState().app;

  if (!initialized) {
    dispatch({
      type: appTypes.INITIALIZED,
      payload: true,
    });
  }
};

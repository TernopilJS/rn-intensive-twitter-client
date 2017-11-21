import { imagesLoaded, initialized } from './actions';
import { INITIALIZED } from './types';

export const initialize = () => async (dispatch, getState) => {
  const { bearerToken } = getState().settings;
  
  if (bearerToken) {
    dispatch(initialized(true));
  }
};

export default {
  imagesLoaded,
  initialize,
};

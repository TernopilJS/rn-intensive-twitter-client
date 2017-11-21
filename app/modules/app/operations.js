import { imagesLoaded, initialization } from './actions';

export const initialize = () => async (dispatch, getState) => {
  const { bearerToken } = getState().settings;
console.log('TOKEN EXISTS???', getState().settings);
  if (bearerToken) {
    console.log('EXISTS!!');

    // TODO: dispatch Sign_in!
    // dispatch();
  }
};

export default {
  imagesLoaded,
  initialize,
};

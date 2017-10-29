import { createActions } from 'redux-actions';
import types from './types';

export const { imagesLoaded } = createActions(
  types.IMAGES_LOADED,
);


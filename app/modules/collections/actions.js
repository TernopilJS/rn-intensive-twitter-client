import { createActions } from 'redux-actions';
import types from './types';

export const {
  addToCollection,
  removeCollection,
  removeFromCollection,
  addCollection,
} = createActions(
  types.ADD_TO_COLLECTION,
  types.REMOVE_COLLECTION,
  types.REMOVE_FROM_COLLECTION,
  types.ADD_COLLECTION,
);

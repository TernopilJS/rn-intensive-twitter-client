import { createSelector } from 'reselect';
import R from 'ramda';

const getAllCollectionIds = R.pathOr([], ['collections', 'collectionIds']);
const getAllCollectionsEntities = R.pathOr([], ['collections', 'collections']);

export const getAllCollections = createSelector(
  [
    getAllCollectionIds,
    getAllCollectionsEntities,
  ],
  (ids, entities) => ids.map(id => entities[id]),
);

import { handleActions } from 'redux-actions';
import uuid from 'uuid/v4';
import types from './types';
import { mergeIn } from '../../utils/stateHelpers';

const initialState = {
  collectionIds: [],
  collections: {
    // [id]: {
    //    collectionName: '',
    //    tweetsIds: [],
    //    [tweetId]: {
    //
    //    }
    // }
  },
};

const authReducer = handleActions({
  [types.ADD_TO_COLLECTION]: mergeIn((action, state) => ({
    collections: {
      ...state.collections,
      [action.payload.collectionId]: {
        ...state.collections[action.payload.collectionId],
        tweetsIds: state.collections[action.payload.collectionId]
          .tweetsIds.concat(action.payload.tweet.id),
        [action.payload.tweet.id]: action.payload.tweet,
      },
    },
  })),
  [types.REMOVE_COLLECTION]: mergeIn((action, state) => ({
    collectionIds: state.collectionIds.filter(i => i !== action.payload),
  })),
  [types.ADD_COLLECTION]: mergeIn((action, state) => {
    const id = uuid();

    return {
      collectionIds: [id].concat(state.collectionIds),
      collections: {
        ...state.collections,
        [id]: {
          id,
          collectionName: action.payload,
          tweetsIds: [],
        },
      },
    };
  }),
  [types.REMOVE_FROM_COLLECTION]: mergeIn((action, state) => ({
    collections: {
      ...state.collections,
      [action.payload.collectionId]: {
        ...state.collections[action.payload.collectionId],
        tweetsIds: state.collections[action.payload.collectionId]
          .tweetsIds.filter(i => i !== action.payload.tweetId),
      },
    },
  })),
}, initialState);

export default authReducer;

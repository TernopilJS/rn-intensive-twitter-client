import { connect } from 'react-redux';
import { compose, hoistStatics, withHandlers } from 'recompose';

import CollectionScreen from './CollectionScreen';
import { collectionsOperations } from '../../modules/collections';


const removeFromCollection = ({ dispatch }) => (collectionId) => (tweetId) => {
    
      dispatch(collectionsOperations.removeFromCollection({ tweetId, collectionId }));
    };

const mapStateToProps = (state, ownProps) => ({
    collection: state.collections.collections[ownProps.navigation.state.params.collection.id],
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
      removeFromCollection,
  }),
);

export default hoistStatics(enhance)(CollectionScreen);

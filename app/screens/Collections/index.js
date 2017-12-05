import { connect } from 'react-redux';
import { LayoutAnimation } from 'react-native';
import { compose, withHandlers, withState, hoistStatics } from 'recompose';
import { collectionsSelectors, collectionsActions } from '../../modules/collections';
import setParamsOnDidMount from '../../utils/enhancers/setParamOnDidMount';
import CollectionsScreen from './CollectionsScreen';

const mapStateToProps = state => ({
  collections: collectionsSelectors.getAllCollections(state),
});

const enhance = compose(
  connect(mapStateToProps, {
    addToCollection: collectionsActions.addCollection,
    removeCollection: collectionsActions.removeCollection,
  }),
  withState('showModal', 'setShowModal', false),
  withState('collectionName', 'setCollectionName', ''),
  withHandlers({
    toggleShowModal: props => () => props.setShowModal(!props.showModal),
    addCollection: props => () => {
      LayoutAnimation.easeInEaseOut();
      props.addToCollection(props.collectionName);
      props.setCollectionName('');
      props.setShowModal(false);
    },
    removeCollection: props => (id) => {
      LayoutAnimation.easeInEaseOut();
      props.removeCollection(id);
    },
  }),
  setParamsOnDidMount('toggleShowModal'),
);

export default hoistStatics(enhance)(CollectionsScreen);

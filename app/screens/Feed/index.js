import { connect } from 'react-redux';
import { compose, withState, withProps } from 'recompose';
import { withLoadingModal, withLoadingState } from '../../utils/enhancers';
import FeedScreen from './FeedScreen';

const enhance = compose(
  connect(),
);

export default enhance(FeedScreen);
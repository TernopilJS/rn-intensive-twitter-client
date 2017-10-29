import { connect } from 'react-redux';
import { compose } from 'recompose';
import FeedScreen from './FeedScreen';

const enhance = compose(
  connect(),
);

export default enhance(FeedScreen);

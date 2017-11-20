import { connect } from 'react-redux';
import { compose, withState, hoistStatics } from 'recompose';
import FeedScreen from './FeedScreen';

const enhance = compose(
  connect(),
  withState('searchValue', 'setSearch', ''),
);

export default hoistStatics(enhance)(FeedScreen);

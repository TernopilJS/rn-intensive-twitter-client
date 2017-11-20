import { connect } from 'react-redux';
import { compose, withState, hoistStatics, withProps } from 'recompose';
import FeedScreen from './FeedScreen';
import tweets from './mocks';

const enhance = compose(
  connect(),
  withState('searchValue', 'setSearch', ''),
  withProps({
    tweets,
  }),
);

export default hoistStatics(enhance)(FeedScreen);

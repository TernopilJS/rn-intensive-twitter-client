import { connect } from 'react-redux';
import { compose, withState, hoistStatics, withProps, withHandlers, lifecycle } from 'recompose';
import axios from 'axios';

import FeedScreen from './FeedScreen';
import { collectionsOperations } from '../../modules/collections';


const searchTweets = ({ settings, searchValue, setTweets }) => async () => {
  // set default url for Axios
  const url = `https://api.twitter.com/1.1/search/tweets.json?q=${searchValue}`;
  const options = {
    headers: {
      Authorization: `Bearer ${settings.bearerToken}`,
    }
  };
  try {
  const tweetsResponse = await axios.get(url, options);
  const tweets = tweetsResponse.data.statuses;

  setTweets(tweets);
  } catch(e) {
    console.log('err', e);
  }
}

const addToCollection = ({ dispatch }) => (tweet) => (collectionId) => {

  dispatch(collectionsOperations.addToCollection({ tweet, collectionId }));
};

const onRefresh = (props) => async () => {
  const { setRefreshing } = props;

  setRefreshing(true);
  // TODO: how we can use `searchTweets` handler from this handler??
  await searchTweets(props)();
  setRefreshing(false);
};

const mapStateToProps = state => ({
  settings: state.settings,
});

const enhance = compose(
  connect(mapStateToProps),
  withState('searchValue', 'setSearch', 'javascript'),
  withState('refreshing', 'setRefreshing', false),
  withState('tweets', 'setTweets', []),
  withHandlers({
    searchTweets,
    addToCollection,
    onRefresh,
  }),
  lifecycle({
    componentDidMount() {
      this.props.searchTweets();
    }
  }),
);

export default hoistStatics(enhance)(FeedScreen);

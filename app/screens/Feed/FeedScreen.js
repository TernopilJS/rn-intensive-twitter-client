import React from 'react';
import T from 'prop-types';
import {
  View,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TweetItem from '../../components/TweetItem';
import { headerStyle } from '../../styles';
import s from './styles';

const FeedScreen = ({
  setSearch,
  searchValue,
  searchTweets,
  tweets,
  addToCollection,
  refreshing,
  onRefresh,
}) => (
  <View style={s.container}>
    <TextInput
      placeholder='Search'
      underlineColorAndroid='white'
      value={searchValue}
      onChangeText={setSearch}
      onSubmitEditing={searchTweets}
      style={[s.textInput]}
    />

    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      {tweets.length > 0 ? tweets.map(t => <TweetItem key={t.id} addToCollection={addToCollection(t)} {...t} />) : null}
    </ScrollView>
  </View>
);

FeedScreen.navigationOptions = ({ navigation }) => ({
  title: 'Feed',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
  ...headerStyle,
});

FeedScreen.propTypes = {
  setSearch: T.func,
  searchValue: T.string,
  tweets: T.array,
  addToCollection: T.func,
};

export default FeedScreen;

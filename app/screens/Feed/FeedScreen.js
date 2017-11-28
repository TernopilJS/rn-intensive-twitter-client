import React from 'react';
import T from 'prop-types';
import {
  View,
  TextInput,
  FlatList,
} from 'react-native';
import R from 'ramda';
import { MaterialIcons } from '@expo/vector-icons';
import TweetItem from '../../components/TweetItem';
import Separator from '../../components/Separator';
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

    <FlatList
      data={tweets}
      renderItem={({ item }) => <TweetItem addToCollection={addToCollection(item)} {...item} />}
      keyExtractor={R.prop('id')}
      refreshing={refreshing}
      ItemSeparatorComponent={() => (
        <Separator small />
      )}
      ListFooterComponent={() => (
        <Separator withBorderTop withBorderBottom={false} />
      )}
      onRefresh={onRefresh}
    />
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
  refreshing: T.bool,
  onRefresh: T.func,
  searchTweets: T.func,
};

export default FeedScreen;

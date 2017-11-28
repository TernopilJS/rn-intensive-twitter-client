import React from 'react';
import T from 'prop-types';
import {
  View,
  FlatList,
} from 'react-native';
import R from 'ramda';
import TweetItem from '../../components/TweetItem';
import { headerStyle } from '../../styles';
import s from './styles';

const CollectionScreen = ({
  collection,
  removeFromCollection,
}) => {
  const tweets = collection.tweetsIds.map(t => collection[t]);

  return (
    <View style={s.container}>
      <FlatList
        data={tweets}
        renderItem={({ item }) => (
          <TweetItem
            {...item}
            isCollection // eslint-disable-line
            removeFromCollection={removeFromCollection(collection.id)}
          />
        )}
        keyExtractor={R.prop('id')}
      />
    </View>
  );
};

CollectionScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.collection.collectionName,
  ...headerStyle,
});

CollectionScreen.propTypes = {
  collection: T.object,
  collectionTweets: T.array,
  removeFromCollection: T.func,
};

export default CollectionScreen;

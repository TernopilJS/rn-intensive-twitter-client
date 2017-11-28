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

const CollectionScreen = ({
  collection,
  removeFromCollection,
}) => (
  <View style={s.container}>

    <ScrollView>
      {collection.tweetsIds.length > 0 ? collection.tweetsIds.map(t => {
          const tweetObj = collection[t];
          
          return (<TweetItem key={t} isCollection removeFromCollection={removeFromCollection(collection.id)} {...tweetObj} />);
      }) : null}
    </ScrollView>

  </View>
);

CollectionScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.collection.collectionName,
  ...headerStyle,
});

CollectionScreen.propTypes = {
  collectionTweets: T.array,
  removeFromCollection: T.func,
};

export default CollectionScreen;

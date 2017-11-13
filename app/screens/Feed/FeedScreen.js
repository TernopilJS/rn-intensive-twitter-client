import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import s from './styles';

const FeedScreen = () => (
  <View>
    <Text>Hello from FeedScreen</Text>
  </View>
);

FeedScreen.navigationOptions = {
  title: 'Feed',
};

export default FeedScreen;

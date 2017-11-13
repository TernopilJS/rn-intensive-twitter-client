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
  drawerLabel: 'Feed',
};

export default FeedScreen;

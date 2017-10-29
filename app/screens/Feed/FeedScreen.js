import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import s from './styles';

const FeedScreen = () => (
  <View>
    <Text>Hello from react native</Text>
  </View>
);

FeedScreen.navigationOptions = {
  title: 'RN',
};

export default FeedScreen;

import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import s from './styles';

const FeedScreen = ({
  loading,
}) => (
  <View>
    <Text>Hello from FeedScreen</Text>
  </View>
);

FeedScreen.navigationOptions = {
  title: 'Feed',
};

export default FeedScreen;

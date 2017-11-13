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
    <Text>Hello from react native</Text>
  </View>
);

FeedScreen.navigationOptions = {
  title: 'RN',
};

export default FeedScreen;

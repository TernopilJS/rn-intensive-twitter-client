import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import s from './styles';

const SettingsScreen = ({ twitterToken, authorize }) => (
  <View>
    <Text>Hello from SettingsScreen</Text>
    <Button
      title='Authorize'
      onPress={authorize}
    />
  </View>
);

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

export default SettingsScreen;

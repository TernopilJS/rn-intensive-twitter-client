import React from 'react';
import T from 'prop-types';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import s from './styles';

const SettingsScreen = ({ twitterToken, setTwitterToken, authorize }) => (
  <View style={s.container}>
    <Text style={s.text}>Hello from SettingsScreen</Text>

    <TextInput
      placeholder='Type token here'
      underlineColorAndroid='white'
      value={twitterToken}
      onChangeText={setTwitterToken}
      style={[s.textInput]}
    />

    <Button
      title='Authorize'
      onPress={authorize}
    />
  </View>
);

SettingsScreen.propTypes = {
  twitterToken: T.string,
  setTwitterToken: T.func,
  authorize: T.func,
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

export default SettingsScreen;

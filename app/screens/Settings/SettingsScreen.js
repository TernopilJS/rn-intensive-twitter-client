import React from 'react';
import T from 'prop-types';
import {
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

import s from './styles';
import { headerStyle } from '../../styles';

const SettingsScreen = ({
  consumerKey,
  consumerSecret,
  setConsumerKey,
  setConsumerSecret,
  authorize,
}) => (
  <View style={s.container}>

    <Text>Consumer key</Text>
    <TextInput
      placeholder='Key'
      underlineColorAndroid='white'
      value={consumerKey}
      onChangeText={setConsumerKey}
      style={[s.textInput]}
    />

    <Text>Consumer secret</Text>
    <TextInput
      placeholder='Secret'
      underlineColorAndroid='white'
      value={consumerSecret}
      onChangeText={setConsumerSecret}
      style={[s.textInput]}
    />

    <Button
      title='Authorize'
      onPress={authorize}
    />
  </View>
);

SettingsScreen.propTypes = {
  consumerKey: T.string,
  setConsumerKey: T.func,
  consumerSecret: T.string,
  setConsumerSecret: T.func,
  authorize: T.func,
};

SettingsScreen.navigationOptions = {
  title: 'Settings',
  ...headerStyle,
};

export default SettingsScreen;

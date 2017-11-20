import React from 'react';
import T from 'prop-types';
import {
  View,
  TextInput,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { headerStyle } from '../../styles';
import s from './styles';

const FeedScreen = ({
  setSearch,
  searchValue,
}) => (
  <View style={s.container}>
    <TextInput
      placeholder='Search'
      underlineColorAndroid='white'
      value={searchValue}
      onChangeText={setSearch}
      style={[s.textInput]}
    />
  </View>
);

FeedScreen.navigationOptions = ({ navigation }) => ({
  title: 'Test',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
  ...headerStyle,
});

FeedScreen.propTypes = {
  setSearch: T.func,
  searchValue: T.string,
};

export default FeedScreen;

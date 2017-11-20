import React from 'react';
import T from 'prop-types';
import {
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TweetItem from '../../components/TweetItem';
import { headerStyle } from '../../styles';
import s from './styles';

const FeedScreen = ({
  setSearch,
  searchValue,
  tweets,
}) => (
  <View style={s.container}>
    <TextInput
      placeholder='Search'
      underlineColorAndroid='white'
      value={searchValue}
      onChangeText={setSearch}
      style={[s.textInput]}
    />

    <ScrollView>
      <TweetItem
        {...tweets[0]}
      />
    </ScrollView>
  </View>
);

FeedScreen.navigationOptions = ({ navigation }) => ({
  title: 'Feed',
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
  tweets: T.array,
};

export default FeedScreen;

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FeedScreen = ({
  loading,
}) => (
  <View>
    <Text>Hello from FeedScreen</Text>
  </View>
);

FeedScreen.navigationOptions = ({ navigation }) => ({
  title: 'Feed',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});

export default FeedScreen;

import React from 'react';
import {
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Text from '../../components/Text';

const CollectionsScreen = () => (
  <View>
    <Text>Hello from CollectionsScreen</Text>
  </View>
);

CollectionsScreen.navigationOptions = ({ navigation }) => ({
  title: 'Collections',
  headerLeft: <MaterialIcons
    name='menu'
    size={35}
    onPress={() => navigation.navigate('DrawerOpen')}
  />,
});

export default CollectionsScreen;

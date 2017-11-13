import React from 'react';
import {
  View,
} from 'react-native';

import Text from '../../components/Text';

const CollectionsScreen = () => (
  <View>
    <Text>Hello from CollectionsScreen</Text>
  </View>
);

CollectionsScreen.navigationOptions = {
  title: 'Collections',
};

export default CollectionsScreen;

import React from 'react';
import {
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import CollectionItem from '../../components/CollectionItem';
// import Text from '../../components/Text';
import s from './styles';


const CollectionsScreen = () => (
  <View style={s.container}>
    <CollectionItem text='Elon Musk' />
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

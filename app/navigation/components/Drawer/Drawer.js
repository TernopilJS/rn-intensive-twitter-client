import React from 'react';
import { View } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import s from './styles';
// import { SimpleItem } from '../../../components';

const Drawer = (props) => (
  <View style={s.root}>
    <SafeAreaView style={s.root} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View>
        <DrawerItems {...props} />
      </View>
    </SafeAreaView>
  </View>
);

export default Drawer;

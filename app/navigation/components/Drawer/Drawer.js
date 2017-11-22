import React from 'react';
import { View, Text } from 'react-native';
import s from './styles';
import { SimpleItem } from '../../../components';

const Drawer = () => (
  <View style={s.root}>
    <View>
      <SimpleItem
        containerStyle={s.header}
        title="Feed"
        titleStyle={s.headerTitle}
      />
      <SimpleItem
        containerStyle={s.header}
        title="Collections"
        titleStyle={s.headerTitle}
      />
      <SimpleItem
        containerStyle={s.header}
        title="Settings"
        titleStyle={s.headerTitle}
      />
    </View>
  </View>
);

export default Drawer;

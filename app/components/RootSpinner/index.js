import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import s from './styles';

const Spinner = () => (
  <View style={[StyleSheet.absoluteFill, s.root]}>
    <ActivityIndicator size="large" />
  </View>
);

export default Spinner;

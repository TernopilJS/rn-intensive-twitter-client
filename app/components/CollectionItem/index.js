import React from 'react';
import T from 'prop-types';
import { withProps } from 'recompose';
import { Text } from 'react-native';
import SwipeOut from 'react-native-swipeout';
import Button from '../Button';
import s from './styles';

const CollectionItem = ({
  text,
  onPress,
  rightButtons,
}) => (
  <SwipeOut right={rightButtons}>
    <Button
      onPress={onPress}
      style={s.container}
    >
      <Text style={s.text}>{text}</Text>
    </Button>
  </SwipeOut>
);

CollectionItem.propTypes = {
  text: T.string,
  onPress: T.func,
  remove: T.func, // eslint-disable-line
  rightButtons: T.array,
};

export default withProps(props => ({
  rightButtons: [{ text: 'Delete', onPress: props.remove }],
}))(CollectionItem);

import React from 'react';
import T from 'prop-types';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Button from '../Button';
import { colors } from '../../styles';
import s from './styles';

const IconButton = ({
  IconSet = Entypo,
  size = 16,
  onPress,
  iconName,
  enabled = true,
  color = colors.black,
  disabledColor = colors.black,
  containerStyle,
  iconStyle,
  hitSlop = 0,
}) => {
  const Root = onPress ? Button : View;

  return (
    <Root
      onPress={() => enabled && onPress()}
      style={[s.container, containerStyle]}
      hitSlop={{ top: hitSlop, left: hitSlop, bottom: hitSlop, right: hitSlop }}
    >
      <IconSet
        style={[s.icon, size && { fontSize: size }, iconStyle]}
        color={enabled ? color : disabledColor}
        name={iconName}
      />
    </Root>
  );
};

IconButton.propTypes = {
  iconName: T.string,
  iconStyle: T.any,
  size: T.number,
  onPress: T.func,
  IconSet: T.any,
  color: T.string,
  disabledColor: T.string,
  containerStyle: T.any,
  enabled: T.bool,
  hitSlop: T.number,
};

export default IconButton;

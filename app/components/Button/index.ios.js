import React from 'react';
import T from 'prop-types';
import { TouchableOpacity } from 'react-native';

const Button = ({
  onPress,
  children,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
  >
    {children}
  </TouchableOpacity>
);

Button.propTypes = {
  children: T.element,
  style: T.any,
  onPress: T.func,
};

export default Button;

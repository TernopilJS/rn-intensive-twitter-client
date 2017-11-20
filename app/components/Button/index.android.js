import React from 'react';
import T from 'prop-types';
import { TouchableNativeFeedback } from 'react-native';

const Button = ({
  onPress,
  children,
  style,
}) => (
  <TouchableNativeFeedback
    onPress={onPress}
    style={style}
  >
    {children}
  </TouchableNativeFeedback>
);

Button.propTypes = {
  children: T.element,
  style: T.any,
  onPress: T.func,
};

export default Button;

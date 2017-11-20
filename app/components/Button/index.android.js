import React from 'react';
import T from 'prop-types';
import { TouchableNativeFeedback, View } from 'react-native';

const Button = ({
  onPress,
  children,
  style,
}) => (
  <TouchableNativeFeedback
    onPress={onPress}
  >
    <View style={style}>
      {children}
    </View>
  </TouchableNativeFeedback>
);

Button.propTypes = {
  children: T.element,
  style: T.any,
  onPress: T.func,
};

export default Button;

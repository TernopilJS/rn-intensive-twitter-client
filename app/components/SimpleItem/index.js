import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text } from 'react-native';
import { touchable } from '../../utils/enhancers';
import s from './styles';

const SimpleItem = (props) => {
  const {
    containerStyle,
    title,
    titleStyle,
  } = props;

  return (
    <View
      style={[
        s.root,
        containerStyle,
      ]}
    >
      <Text
        style={[
          s.title,
          titleStyle,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

SimpleItem.propTypes = {
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  containerStyle: ViewPropTypes.style,
};

export default touchable(SimpleItem);

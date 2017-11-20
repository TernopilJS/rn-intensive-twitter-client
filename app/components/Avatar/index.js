import React from 'react';
import T from 'prop-types';
import { Image } from 'react-native';
import s from './styles';

const Avatar = ({
  source,
}) => (
  <Image source={{ uri: source }} style={s.container} />
);

Avatar.propTypes = {
  source: T.string,
};

export default Avatar;

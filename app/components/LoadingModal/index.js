import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import s from './styles';

const LoadingModal = ({
  loadingText,
  isVisible,
}) => (
  <Modal
    style={s.modal}
    backdropOpacity={0.4}
    isVisible={isVisible}
    animationIn="zoomIn"
    animationOut="zoomOut"
  >
    <View style={s.container}>
      <ActivityIndicator size="large" />
      {!!loadingText && <Text style={s.text}>{loadingText}</Text>}
    </View>
  </Modal>
);

LoadingModal.propTypes = {
  loadingText: PropTypes.string,
  isVisible: PropTypes.bool, // eslint-disable-line
};

export default LoadingModal;

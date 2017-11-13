import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  container: {
    alignItems: 'center',
    width: 138,
    height: 138,
    borderRadius: 8,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    bottom: 18,
    fontSize: 15,
    fontWeight: '500',
    color: colors.black,
  },
});

export default styles;

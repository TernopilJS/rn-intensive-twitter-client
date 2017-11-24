import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  modal: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    height: 28,
    borderColor: colors.gray,
    color: colors.black,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  empty: {
    fontSize: 24,
    color: colors.gray,
    alignSelf: 'center',
    lineHeight: height - 50,
  },
});

export default styles;

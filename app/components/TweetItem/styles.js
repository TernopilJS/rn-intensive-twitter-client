import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    width: 60,
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
  heading: {
    fontSize: 10,
  },
  displayName: {
    color: colors.black,
  },
  userName: {
    color: colors.gray,
  },
  date: {
    color: colors.gray,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 12,
    marginRight: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;

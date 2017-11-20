import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
    color: colors.green,
    opacity: 0.7,
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingLeft: 10,
    paddingVertical: '2%',
    marginVertical: 20,
  },
});

export default styles;

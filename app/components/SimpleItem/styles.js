import { StyleSheet } from 'react-native';
import { colors, dimensions } from '../../styles';

const indent = dimensions.indent * 1.5;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: indent,
  },
  title: {
    flex: 1,
    fontSize: 12,
    letterSpacing: 2,
    color: colors.secondaryText,
  },
});

export default styles;

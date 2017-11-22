import { Platform, StyleSheet } from 'react-native';
import s, { colors, dimensions } from '../../../styles';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const { doubleIndent, indent } = dimensions;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? 0 : 24,
  },
  itemRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: indent,
  },
  itemTitle: {
    flex: 1,
    fontSize: 12,
    letterSpacing: 2,
    color: colors.secondaryText,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 0 : indent * 1.5,
    paddingLeft: indent * 1.5,
    paddingRight: indent * 1.5,
    ...StyleSheet.flatten(s.borderBottom),
  },
  headerTitle: {
    fontSize: 15,
  },
  itemContainer: {
    paddingLeft: doubleIndent,
    paddingRight: doubleIndent,
  },
  itemTitle: {
    color: colors.accentText,
  },
  version: {
    textAlign: 'center',
    color: colors.secondaryText,
    padding: indent,
  },
});

export default styles;

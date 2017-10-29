import { StyleSheet } from 'react-native';
import colors from './colors';
import { indent, doubleIndent } from './dimensions';

const styles = StyleSheet.create({
  container: {
    paddingLeft: doubleIndent,
    paddingRight: doubleIndent,
  },
  fillAll: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  withMarginBottom: {
    marginBottom: indent,
  },
  withMarginTop: {
    marginTop: indent,
  },
  withMarginLeft: {
    marginRight: indent,
  },
  withMarginRight: {
    marginRight: indent,
  },
  withPaddingLeft: {
    paddingLeft: indent,
  },
  withPaddingRight: {
    paddingRight: indent,
  },
  withVerticalMargin: {
    marginTop: indent,
    marginBottom: indent,
  },
  withVerticalPadding: {
    paddingTop: indent,
    paddingBottom: indent,
  },
  withHorizontalPadding: {
    paddingRight: indent,
    paddingLeft: indent,
  },
  withHorizontalMargin: {
    marginRight: indent,
    marginLeft: indent,
  },
  withoutMargins: {
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  },
  withWhiteBackground: {
    backgroundColor: colors.white,
  },
  withLightBackground: {
    backgroundColor: colors.athensGray,
  },
  withSecondaryTextColor: {
    color: colors.secondaryText,
  },
  withVerticalBorder: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  stickToBottom: {
    bottom: 0,
  },
  stretchHorizontally: {
    left: 0,
    right: 0,
  },
  alignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  withoutBorders: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    shadowOpacity: 0,
  },
  withBorderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  withBorderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  headerBg: {
    backgroundColor: colors.headerBackgroundColorDefault,
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.headerBorderBottom,
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.headerBorderBottom,
  },
});

export default styles;

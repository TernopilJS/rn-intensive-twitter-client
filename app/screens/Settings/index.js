import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';

import SettingsScreen from './SettingsScreen';
import * as settingsOperations from '../../modules/settings/operations';

const authorize = ({ twitterToken, setSettingsProps }) => () => {
  // TODO: check Twitter Token

  setSettingsProps({ twitterToken });
};

const mapDispatchToProps = {
  ...settingsOperations,
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('twitterToken', 'setTwitterToken', 'sda'),
  withHandlers({ authorize }),
);

export default enhance(SettingsScreen);

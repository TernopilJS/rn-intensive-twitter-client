import { connect } from 'react-redux';
import { compose, withHandlers, withState, withPropsOnChange, hoistStatics } from 'recompose';
import R from 'ramda';

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
  withState('isEmpty', 'setIsEmpty', false),
  withPropsOnChange(['twitterToken'], props => {
    props.setIsEmpty(R.isEmpty(props.twitterToken));
  }),
  withHandlers({ authorize }),
);

export default hoistStatics(enhance)(SettingsScreen);

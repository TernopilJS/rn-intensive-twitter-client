import { connect } from 'react-redux';
import { compose, withHandlers, withState, withPropsOnChange, hoistStatics } from 'recompose';
import R from 'ramda';
import { ToastAndroid } from 'react-native';

import { Buffer } from 'buffer/';

import SettingsScreen from './SettingsScreen';
import * as settingsOperations from '../../modules/settings/operations';


async function getBearerToken(consumerKey, consumerSecret) {
  const base64EncodedKey = new Buffer(`${consumerKey}:${consumerSecret}`).toString('base64');

  return fetch('https://api.twitter.com/oauth2/token?grant_type=client_credentials', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      Authorization: `Basic ${base64EncodedKey}`,
    },
  });
}

const authorize = ({ consumerKey, consumerSecret, setSettingsProps }) => async () => {
  const key = consumerKey.trim();
  const secret = consumerSecret.trim();

  const bearerResponse = await getBearerToken(key, secret);
  
  if (bearerResponse.status !== 200) {
    ToastAndroid.show('Invalid tokens!', ToastAndroid.SHORT);
    return;
  }

  const token = await bearerResponse.json();

  const settings = {
    consumerKey: key,
    consumerSecret: secret,
    bearerToken: token.access_token,
  };

  setSettingsProps(settings);
};

const mapDispatchToProps = {
  ...settingsOperations,
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('consumerKey', 'setConsumerKey', ''),
  withState('consumerSecret', 'setConsumerSecret', ''),
  withState('isEmpty', 'setIsEmpty', false),
  withPropsOnChange(['consumerKey'], props => {
    props.setIsEmpty(R.isEmpty(props.consumerKey));
  }),
  withPropsOnChange(['consumerSecret'], props => {
    props.setIsEmpty(R.isEmpty(props.consumerKey));
  }),
  withHandlers({ authorize }),
);

export default hoistStatics(enhance)(SettingsScreen);

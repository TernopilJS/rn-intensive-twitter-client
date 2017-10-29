import { NavigationActions } from 'react-navigation';
import screens from '../../constants/screens';
import { appTypes } from '../app';
import { getResetAction } from '../../utils/navHelper';
import Navigator from '../../navigation/RootNavigator';

const getResetState = (state, screen) =>
  Navigator.router.getStateForAction(getResetAction(screen, undefined, null), state);

const navigatorReducer = (state, action) => {
  switch (action.type) {
  default:
    return Navigator.router.getStateForAction(action, state);
  }
};

export default navigatorReducer;

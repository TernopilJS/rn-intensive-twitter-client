import { NavigationActions } from 'react-navigation';
import screens from '../../constants/screens';
import { appTypes } from '../app';
import { getResetAction } from '../../utils/navHelper';
import Navigator from '../../navigation/RootNavigator';

const getResetState = (state, screen) =>
  Navigator.router.getStateForAction(getResetAction(screen, undefined, null), state);

const navigatorReducer = (state, action) => {
  if (action.type === appTypes.INITIALIZED) {
    if (action.payload) {
      return getResetState(state, screens.App);
    }

    return getResetState(state, screens.InitialSetup);
  }

  const newState = Navigator.router.getStateForAction(action, state);
  return (newState || state);
};

export default navigatorReducer;

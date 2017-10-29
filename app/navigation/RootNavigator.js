import { StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import SignedInNavigator from './SignedInNavigator';

const Routes = {
  [screens.SignedIn]: {
    screen: SignedInNavigator,
  },
};

export default StackNavigator(Routes, { headerMode: 'none' });

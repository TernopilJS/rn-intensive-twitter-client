import { StackNavigator } from 'react-navigation';

import screens from '../constants/screens';
import { SettingsScreen } from '../screens';
import AppNavigator from './AppNavigator';


const Routes = {
  [screens.InitialSetup]: {
    screen: StackNavigator({
      initial: {
        screen: SettingsScreen,
        navigationOptions: {
          title: 'Initial setup',
          headerLeft: null,
        },
      },
    }),
  },
  [screens.App]: {
    screen: AppNavigator,
  },
};

export default StackNavigator(Routes, { headerMode: 'none' });

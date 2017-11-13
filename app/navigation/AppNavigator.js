import { DrawerNavigator, StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
  FeedScreen,
  CollectionsScreen,
  SettingsScreen,
} from '../screens';

const RootRoutes = {
  [screens.Feed]: {
    screen: StackNavigator({ init: { screen: FeedScreen } }),
  },
  [screens.Collections]: {
    screen: StackNavigator({ init: { screen: CollectionsScreen } }),
  },
  [screens.Settings]: {
    screen: StackNavigator({ init: { screen: SettingsScreen } }),
  }
};

export default DrawerNavigator(RootRoutes);

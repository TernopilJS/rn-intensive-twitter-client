import { DrawerNavigator, StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
  FeedScreen,
  CollectionsScreen,
  SettingsScreen,
} from '../screens';

const RootRoutes = {
  [screens.Feed]: {
    screen: FeedScreen,
  },
  [screens.Collections]: {
    screen: CollectionsScreen,
  },
  [screens.Settings]: {
    screen: SettingsScreen,
  }
};

export default DrawerNavigator(RootRoutes);

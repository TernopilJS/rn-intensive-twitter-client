import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
  FeedScreen,
  CollectionsScreen,
  SettingsScreen,
  CollectionScreen,
} from '../screens';

import Drawer from './components/Drawer/Drawer';

const rootRoutes = {
  [screens.Feed]: {
    screen: StackNavigator({
      init: { screen: FeedScreen },
      [screens.Collection]: { screen: CollectionScreen },
    }),
  },
  [screens.Collections]: {
    screen: StackNavigator({
      init: { screen: CollectionsScreen },
      [screens.Collection]: { screen: CollectionScreen },
    }),
  },
  [screens.Settings]: {
    screen: StackNavigator({ init: { screen: SettingsScreen } }),
  },
};

const drawerSettings = {
  contentComponent: props => <Drawer {...props} />,
};

export default DrawerNavigator(rootRoutes, drawerSettings);
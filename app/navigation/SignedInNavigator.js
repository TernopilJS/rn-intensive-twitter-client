import { StackNavigator } from 'react-navigation';
import screens from '../constants/screens';
import {
  FeedScreen,
} from '../screens';

const RootRoutes = {
  [screens.Feed]: {
    screen: FeedScreen,
  },
};

export default StackNavigator(RootRoutes);

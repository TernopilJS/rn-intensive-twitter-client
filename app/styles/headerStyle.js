import { Platform } from 'react-native';

export default {
  headerStyle: {
    marginTop: Platform.OS === 'ios' ? 0 : 24,
  },
};

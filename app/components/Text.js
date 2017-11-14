import { Text } from 'react-native';
import { compose } from 'recompose';

import { withStyle } from '../utils/enhancers';

export default compose(
  withStyle({ fontFamily: 'gill-sans' }),
)(Text);

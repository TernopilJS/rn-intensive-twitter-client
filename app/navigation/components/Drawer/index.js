import { connect } from 'react-redux';
import { compose } from 'recompose';

import Drawer from './Drawer';

const enhance = compose(
  connect(),
);

export default enhance(Drawer);

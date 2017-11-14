import { connect } from 'react-redux';
import { compose } from 'recompose';
import CollectionsScreen from './CollectionsScreen';

const enhance = compose(
  connect(),
);

export default enhance(CollectionsScreen);

import { TouchableOpacity } from 'react-native';
import { branch, nest, renderComponent } from 'recompose';
import R from 'ramda';

export default Component => branch(
  props => R.is(Function, props.onPress),
  renderComponent(nest(TouchableOpacity, Component)),
)(Component);

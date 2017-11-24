import { lifecycle } from 'recompose';

const setParamOnDidMount = name => lifecycle({
  componentDidMount() {
    this.props.navigation.setParams({ [name]: this.props[name] });
  },
});

export default setParamOnDidMount;

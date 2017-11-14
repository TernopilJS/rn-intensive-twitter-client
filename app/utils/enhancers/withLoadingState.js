import { compose, withState, lifecycle } from 'recompose';

const enhancer = compose(
  withState('loading', 'toggleLoading', true),
  lifecycle({
    componentDidMount() {
      setTimeout(() => this.props.toggleLoading(false), 1000);
    },
  }),
);

export default enhancer;

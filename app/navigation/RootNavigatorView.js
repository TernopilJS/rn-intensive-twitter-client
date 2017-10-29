import React from 'react';
import T from 'prop-types';
import { addNavigationHelpers } from 'react-navigation';
import { AppLoading } from 'expo';
import { withHandlers } from 'recompose';
import { appOperations } from '../modules/app';
import loadImages from '../constants/images';
import Navigator from './RootNavigator';

const NavigatorView = ({
  dispatch,
  navigator,
  isReady,
  asyncJob,
  finishJob,
  jobError,
}) => (
  isReady ? (
    <Navigator navigation={addNavigationHelpers({ dispatch, state: navigator })} />
  ) : (
    <AppLoading
      startAsync={asyncJob}
      onFinish={finishJob}
      onError={jobError}
    />
  )
);

NavigatorView.propTypes = {
  dispatch: T.func,
  navigator: T.object,
  isReady: T.bool,
  asyncJob: T.func,
  finishJob: T.func,
  jobError: T.func,
};

const enhance = withHandlers({
  asyncJob: props => () => Promise.all([]),
  finishJob: props => () => props.dispatch(appOperations.imagesLoaded(true)),
  jobError: props => error => {
    console.warn(error);
    props.dispatch(appOperations.imagesLoaded(true));
  },
});

export default enhance(NavigatorView);

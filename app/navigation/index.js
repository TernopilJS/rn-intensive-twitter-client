import { connect } from 'react-redux';
import NavigatorView from './RootNavigatorView';

const mapStateToProps = ({ navigator, app }) => ({
  navigator,
  isReady: app.isImagesLoaded,
});

const NavigatorContainer = connect(mapStateToProps)(NavigatorView);

export default NavigatorContainer;

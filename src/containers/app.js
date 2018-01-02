import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = ({ bubble }) => ({
  bubbleSize: bubble.size,
  bubbles: bubble.bubbles,
});

const mapDispatchToProps = dispatch => ({});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

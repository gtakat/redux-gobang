import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (state);

// function mapStateToProps(state) {
//   console.info(state);
//   return state;
// }

export default connect(mapStateToProps)(App);
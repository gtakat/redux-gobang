import { connect } from 'react-redux';
import Game from '../components/Game';
import { hitGoishi, calculateWinner } from '../actions';

const mapStateToProps = (state) => (state);

function mapDispatchToProps(dispatch) {
  return {
    hitGoishi: (row, col) => { dispatch(hitGoishi(row, col)) },
    calculateWinner: (current, row, col) => { dispatch(calculateWinner(current, row, col)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
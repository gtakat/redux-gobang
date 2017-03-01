import { connect } from 'react-redux';
import Game from '../components/Game';
import { hitGoishi, winnerDecision } from '../actions';

const mapStateToProps = (state) => (state);

function mapDispatchToProps(dispatch) {
  return {
    hitGoishi: (row, col) => { dispatch(hitGoishi(row, col)) },
    winnerDecision: (winner) => { dispatch(winnerDecision(winner)) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
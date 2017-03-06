import { connect } from 'react-redux'
import Gameinfo from '../components/Gameinfo'

const mapStateToProps = (state) => (
  {
    current: state.current,
    winner: state.winner
  }
)

export default connect(mapStateToProps)(Gameinfo)
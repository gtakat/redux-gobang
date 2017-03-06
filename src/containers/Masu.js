import { connect } from 'react-redux'
import Masu from '../components/Masu'
import { hitGoishi } from '../actions'

const mapStateToProps = (state) => (state)

const mapDispatchToProps = (dispatch) => (
  {
    hitGoishi: (row, col) => { dispatch(hitGoishi(row, col)) }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Masu)
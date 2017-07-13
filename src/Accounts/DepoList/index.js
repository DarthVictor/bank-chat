import DepoList from './DepoList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    deposites: state.operations.deposites
  }
}

const DepoListContainer = connect(
  mapStateToProps
)(DepoList)

export default DepoListContainer
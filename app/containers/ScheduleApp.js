import React, { Component } from 'react'
import { connect } from 'react-redux'

class ScheduleApp extends Component {
  render () {
    return (
      <div>Hi There</div>
    )
  }
}

function mapStateToProps(state) {
  return state || {};
}

function mapDispatchToProps(dispatch) {
  return {
    something: () => dispatch()
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleApp)

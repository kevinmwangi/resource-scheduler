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
  const {
    activities,
    days,
    resources,
    resourceActivityDays,
  } = state

  return {
    activities,
    days,
    resources,
    resourceActivityDays,
  }
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

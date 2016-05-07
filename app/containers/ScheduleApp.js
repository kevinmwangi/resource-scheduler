import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import AppBar from 'material-ui/AppBar'

import * as actionCreators from '../actionCreators'
import Schedule from '../components/Schedule'

const styles = {
  ScheduleApp: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  AppBar: {
    flex: 'none',
  },
}

class ScheduleApp extends Component {
  render () {
    return (
      <div className="ScheduleApp" style={styles.ScheduleApp}>
        <AppBar
          zDepth={2}
          title="Resource Scheduler"
          style={styles.AppBar}
        />

        <Schedule
          {...this.props}
        />
      </div>
    )
  }
}

function mapStateToProps({
    activities,
    days,
    resources,
    resourceActivityDays,
    editing,
    streams,
    streamGrouping,
  }) {

  return {
    activities,
    days,
    resources,
    resourceActivityDays,
    editing,
    streams,
    streamGrouping,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleApp)

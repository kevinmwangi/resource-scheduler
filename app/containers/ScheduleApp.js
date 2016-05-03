import React, { Component } from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar'

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
          title="Resource Scheduler"
          style={styles.AppBar}
        />

      </div>
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

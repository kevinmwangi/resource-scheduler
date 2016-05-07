import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../actionCreators'
import Schedule from '../components/Schedule'
import ScheduleAppBar from '../components/ScheduleAppBar'

const styles = {
  ScheduleApp: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}

class ScheduleApp extends Component {
  render () {
    return (
      <div className="ScheduleApp" style={styles.ScheduleApp}>
        <ScheduleAppBar {...this.props} layoutStyles={{flex: 'none'}} />
        <Schedule {...this.props}/>
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

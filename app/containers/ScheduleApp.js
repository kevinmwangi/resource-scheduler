import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../actionCreators'
import Schedule from '../components/Schedule'
import ScheduleAppBar from '../components/ScheduleAppBar'
import getGroupedStreams from '../selectors/getGroupedStreams'
import getSelectedStreamDays from '../selectors/getSelectedStreamDays'

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

function mapStateToProps(state) {
  return Object.assign({
    activeStream: state.activeStream,
    activities: state.activities,
    dates: state.dates,
    editing: state.editing,
    resourceActivityDays: state.resourceActivityDays,
    resources: state.resources,
    streamGrouping: state.streamGrouping,
    selectedStreamDays: getSelectedStreamDays(state),
  }, getGroupedStreams(state))
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleApp)

import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'

import ResourceActivityStream from './ResourceActivityStream'
import StreamLabelsContainer from './StreamLabelsContainer'
import TimeStream from './TimeStream'
import ResourceActivityStreamsContainer from './ResourceActivityStreamsContainer'
import dimensions from '../constants/dimensions'
import ViewSwitcher from '../components/ViewSwitcher'

const styles = {
  ScheduleTable: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  },
  Paper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  outerWindow : {
    flex: '1 1 auto',
    overflowY: 'scroll',
    overflowX: 'hidden',
  },
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 'none',
  },
  streamsContainer : {
    flex: '1 1 auto',
    overflowY: 'hidden',
    overflowX: 'scroll',
    zIndex: 0,
  },
  timeStream: {
    overflowY: 'hidden',
    overflowX: 'hidden',
    zIndex: 2,
    display: 'flex',
  },
  topLeftCorner: {
    width: dimensions.STREAM_LABEL_WIDTH,
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: dimensions.desktopGutterLess,
    zIndex: 3,
    height: dimensions.STREAM_CHANNEL_HEIGHT,
  },
  streamLabels: {
    flex: 'none',
    width: dimensions.STREAM_LABEL_WIDTH,
    zIndex: 2,
  },
  dateControls: {
    flex: 'none',
    width: 56,
    marginLeft: dimensions.desktopGutterLess,
    height: '100%',
  },
}

export default function ScheduleTable (props) {

  const onScrollStreams = (event) => {
    const scrollLeft = event.target.scrollLeft
    document.getElementById('TimeStreamInnerWindow').scrollLeft = scrollLeft
  }

  return (
    <div className='ScheduleTable' style={styles.ScheduleTable}>
      <Paper zDepth={2} rounded={false} style={styles.Paper}>
        <div  style={styles.outerContainer}>
          <Paper zDepth={1} rounded={false} style={styles.topLeftCorner} >

            <ViewSwitcher
              viewGroupedBy={props.streamGrouping}
              onViewGroupChange={props.regroupStreams}
              layoutStyles={{flex: '1 1 auto', height: '100%'}}
            />

            <div style={styles.dateControls} />

          </Paper>

          <Paper id="TimeStreamInnerWindow"
            zDepth={2}
            rounded={false}
            style={styles.timeStream}
            >

              <TimeStream days={props.days} />

          </Paper>
        </div>

        <div style={styles.outerWindow}>
          <div style={styles.outerContainer}>
            <Paper zDepth={2} rounded={false} style={styles.streamLabels}>

              <StreamLabelsContainer
                {...props}
                viewGroupedBy={props.streamGrouping}
              />

            </Paper>

            <div id='StreamsContainer'
              style={styles.streamsContainer}
              onScroll={onScrollStreams} >

              <ResourceActivityStreamsContainer
                {...props}
                viewGroupedBy={props.streamGrouping}
              />

            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}

ScheduleTable.propTypes = {
  activeStream: PropTypes.object.isRequired,
  activities: PropTypes.object.isRequired,
  days: PropTypes.array.isRequired,
  resourceActivityDays: PropTypes.object.isRequired,
  resources: PropTypes.object.isRequired,
  streamsGroupedByActivities: PropTypes.object.isRequired,
  streamsGroupedByResources: PropTypes.object.isRequired,
  streamGrouping: PropTypes.string.isRequired,
}

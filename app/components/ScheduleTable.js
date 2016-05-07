import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'

import ResourceActivityStream from './ResourceActivityStream'
import StreamLabelsContainer from './StreamLabelsContainer'
import TimeStream from './TimeStream'
import ResourceActivityStreamsContainer from './ResourceActivityStreamsContainer'
import Dimensions from '../constants/dimensions'
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
    width: Dimensions.STREAM_LABEL_WIDTH,
    flex: '0 0 auto',
    zIndex: 3,
    height: Dimensions.STREAM_CONTAINER_HEIGHT,
  },
  streamLabels: {
    flex: 'none',
    width: Dimensions.STREAM_LABEL_WIDTH,
    zIndex: 2,
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
            />

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
                {...props} viewGroupedBy={props.streamGrouping}/>

            </Paper>

            <div id='StreamsContainer'
              style={styles.streamsContainer}
              onScroll={onScrollStreams} >

              <ResourceActivityStreamsContainer
                 {...props} viewGroupedBy={props.streamGrouping} />

            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}

ScheduleTable.propTypes = {
  activities: PropTypes.object.isRequired,
  days: PropTypes.array.isRequired,
  resources: PropTypes.object.isRequired,
  resourceActivityDays: PropTypes.object.isRequired,
  streams: PropTypes.object.isRequired,
  streamGrouping: PropTypes.string.isRequired,
}

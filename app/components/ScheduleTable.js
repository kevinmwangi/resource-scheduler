import React, { Component, PropTypes } from 'react'
import FlipMove from 'react-flip-move'
import Paper from 'material-ui/Paper'

import ResourceActivityStream from './ResourceActivityStream'
import StreamLabelsContainer from './StreamLabelsContainer'
import TimeStream from './TimeStream'
import ResourceActivityStreamsContainer from './ResourceActivityStreamsContainer'
import StreamLabel from './StreamLabel'
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
    paddingLeft: 16,
    paddingRight: 16,
  },
  streamLabels: {
    flex: 'none',
    width: Dimensions.STREAM_LABEL_WIDTH,
    zIndex: 2,
  },
}

export default class ScheduleTable extends Component {

  static propTypes = {
    activities: PropTypes.object.isRequired,
    days: PropTypes.array.isRequired,
    resources: PropTypes.object.isRequired,
    resourceActivityDays: PropTypes.object.isRequired,
    streams: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      viewGroupedBy: 'resource_id',
    }
  }

  onViewGroupChange(viewGroupedBy) {
    this.setState({
      viewGroupedBy: viewGroupedBy,
    })
  }

  onScrollStreams(event) {
    const scrollLeft = event.target.scrollLeft
    document.getElementById('TimeStreamInnerWindow').scrollLeft = scrollLeft
  }

  render () {
    return (
      <div className='ScheduleTable' style={styles.ScheduleTable}>
        <Paper zDepth={2} rounded={false} style={styles.Paper}>
          <div  style={styles.outerContainer}>
            <Paper zDepth={1} rounded={false} style={styles.topLeftCorner} >

              <ViewSwitcher
                viewGroupedBy={this.state.viewGroupedBy}
                onViewGroupChange={this.onViewGroupChange.bind(this)}
              />

            </Paper>

            <Paper id="TimeStreamInnerWindow"
              zDepth={2}
              rounded={false}
              style={styles.timeStream}
            >

                <TimeStream days={this.props.days} />

            </Paper>
          </div>

          <div style={styles.outerWindow}>
            <div style={styles.outerContainer}>
              <Paper zDepth={2} rounded={false} style={styles.streamLabels}>

                <StreamLabelsContainer
                  {...this.props}
                  viewGroupedBy={this.state.viewGroupedBy}/>

              </Paper>

              <div id='StreamsContainer'
                style={styles.streamsContainer}
                onScroll={this.onScrollStreams} >

                <ResourceActivityStreamsContainer
                   {...this.props}
                   viewGroupedBy={this.state.viewGroupedBy} />

              </div>
            </div>
          </div>

        </Paper>
      </div>
    )
  }
}

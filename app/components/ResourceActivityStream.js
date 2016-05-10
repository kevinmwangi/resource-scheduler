import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'

import ResourceActivityDay from './ResourceActivityDay'
import dimensions from '../constants/dimensions'

import colors from '../constants/colors'

const styles = {
  channel: {
    whiteSpace: 'nowrap',
    display: 'inline-block',
    paddingTop: dimensions.STREAM_SPACING,
    paddingBottom: dimensions.STREAM_SPACING,
    backgroundColor: 'none',
  },
  active: {

  },
  inactive: {

  },
  stream: {
  },
}

export default class ResourceActivityStream extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    resourceActivityDays: PropTypes.object.isRequired,
    selectionModeOn: PropTypes.bool.isRequired,
    selectedStreamDaysLookup: PropTypes.object.isRequired,
    stream: PropTypes.object.isRequired,
  }

  render() {
    const {
      isActive,
      resourceActivityDays,
      selectionModeOn,
      selectedStreamDaysLookup,
      stream,
    } = this.props

    const days = stream.streamDays.map((day) => {
      return (
        <ResourceActivityDay
          key={day.uid}
          hours={day.hours}
          scheduled={day.scheduled}
          streamIsActive={isActive}
          selectionModeOn={selectionModeOn}
          isSelected={!!selectedStreamDaysLookup[day.uid]}
          uid={day.uid}
        />
      )
    })

    const activationStyle = isActive ? styles.active : styles.inactive
    const zDepth = isActive ? 2 : 1

    return (
      <div
        className='ResourceActivityStream'
        style={Object.assign({}, styles.channel, activationStyle)}>
        <Paper
          zDepth={zDepth}
          rounded={false}
          style={styles.stream}
          >
          {days}
        </Paper>
      </div>
    )
  }
}

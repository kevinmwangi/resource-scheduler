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
    stream: PropTypes.object.isRequired,
    isActive: PropTypes.bool.isRequired,
  }

  render() {
    const {
      isActive,
      stream,
    } = this.props

    const days = stream.resourceActivityDays.map((day) => {
      return (
        <ResourceActivityDay
          key={day.day}
          hours={day.hours}
          scheduled={day.scheduled}
          streamIsActive={isActive}
          isSelected={false}
        />
      )
    })

    const activationStyle = isActive ? styles.active : styles.inactive

    return (
      <div
        className='ResourceActivityStream'
        style={Object.assign({}, styles.channel, activationStyle)}>
        <Paper zDepth={2} rounded={false} style={styles.stream}>
          {days}
        </Paper>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'

import ResourceActivityDay from './ResourceActivityDay'
import StreamLabel from './StreamLabel'
import {ListItem} from 'material-ui/List'
import dimensions from '../constants/dimensions'

import colors from '../constants/colors'

const styles = {
  channel: {
    whiteSpace: 'nowrap',
    display: 'inline-block',
  },
  stream: {
    marginTop: dimensions.STREAM_SPACING,
    marginBottom: dimensions.STREAM_SPACING,
  }
}

export default class ResourceActivityStream extends Component {
  static propTypes = {
    stream: PropTypes.object.isRequired,
  }

  render() {
    const days = this.props.stream.resourceActivityDays.map((day) => {
      return (
        <ResourceActivityDay
          key={day.day}
          hours={day.hours}
          scheduled={day.scheduled}
        />
      )
    })

    return (
      <div
        className='ResourceActivityStream'
        disabled={true}
        style={styles.channel}>
        <Paper zDepth={2} rounded={false} style={styles.stream}>
          {days}
        </Paper>
      </div>
    )
  }
}

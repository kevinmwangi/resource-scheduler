import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'

import ResourceActivityDay from './ResourceActivityDay'
import StreamLabel from './StreamLabel'
import {ListItem} from 'material-ui/List'
import dimensions from '../constants/dimensions'

const styles = {
  ResourceActivityStream: {
    whiteSpace: 'nowrap',
    display: 'inline-block',
    paddingTop: dimensions.STREAM_MARGIN,
    paddingBottom: dimensions.STREAM_MARGIN,
  },
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
          scheduled={day.scheduled} />
      )
    })

    return (
      <div
        className='ResourceActivityStream'
        disabled={true}
        style={styles.ResourceActivityStream}>
        <Paper zDepth={1} rounded={false}>
          {days}
        </Paper>
      </div>
    )
  }
}

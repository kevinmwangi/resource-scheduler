import React from 'react'
import FlipMove from 'react-flip-move'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import underscore from 'underscore'
import Paper from 'material-ui/Paper'

import StatefulDivider from './StatefulDivider'
import ResourceActivityStream from './ResourceActivityStream'
import ListItemResource from './ListItemResource'
import ListItemActivity from './ListItemActivity'
import dimensions from './../constants/dimensions'

const styles = {
  List: {
    paddingTop: 0,
    display: 'inline-flex',
  },
  groupStream: {
    height: dimensions.STREAM_CONTAINER_HEIGHT,
    width: '100%',
  },
}

export default function ResourceActivityStreamsContainer(props) {
  const {
    streams,
    resources,
    activities,
    viewGroupedBy,
  } = props

  const activityGroups = () => {
    const groupedStreams = underscore.groupBy(streams, 'activity_id')
    const list = []

    activities.list.forEach((activity_id) => {
      const activity = activities.lookup[activity_id]
      const streams = groupedStreams[activity_id] || []

      list.push(<StatefulDivider key={`d${activity_id}`} />)

      list.push(<div key={`r${activity_id}`} style={{height: dimensions.STREAM_CONTAINER_HEIGHT}} />)

      streams.forEach((stream) => {
        list.push(
          <ResourceActivityStream
            key={stream.uid}
            stream={stream}
          />
        )
      })
    })

    return list
  }

  const resourceGroups = () => {
    const groupedStreams = underscore.groupBy(streams, 'resource_id')
    const list = []

    resources.list.forEach((resource_id) => {
      const resource = resources.lookup[resource_id]
      const streams = groupedStreams[resource_id] || []

      list.push(<StatefulDivider key={`d${resource_id}`} />)

      list.push(<div key={`r${resource_id}`} style={styles.groupStream} />)

      streams.forEach((stream) => {
        list.push(
          <ResourceActivityStream
            key={stream.uid}
            stream={stream}
          />
        )
      })
    })

    return list
  }

  const groups = () => {
    if (viewGroupedBy == 'activity_id') {
      return activityGroups()
    } else {
      return resourceGroups()
    }
  }

  return (
    <div style={styles.List} className="ResourceActivityStreamsContainer">
      <FlipMove
        enterAnimation="fade"
        leaveAnimation="fade"
      >
        {groups()}
      </FlipMove>
    </div>
  )
}


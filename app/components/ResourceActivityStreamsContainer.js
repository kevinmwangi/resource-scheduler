import React from 'react'
import FlipMove from 'react-flip-move'
import underscore from 'underscore'

import StatefulDivider from './StatefulDivider'
import ResourceActivityStream from './ResourceActivityStream'
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
    const groupedStreams = streams.groupedByActivity
    const list = []

    activities.ids.forEach((activity_id) => {
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
    const groupedStreams = streams.groupedByResource
    const list = []

    resources.ids.forEach((resource_id) => {
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


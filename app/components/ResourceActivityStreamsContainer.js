import React, { PropTypes } from 'react'
import FlipMove from 'react-flip-move'

import StatefulDivider from './StatefulDivider'
import ResourceActivityStream from './ResourceActivityStream'
import dimensions from './../constants/dimensions'
import animations from './../constants/animations'

const styles = {
  List: {
    paddingTop: 0,
    paddingBottom: dimensions.SCHEDULE_BOTTOM_PADDING,
    display: 'inline-flex',
  },
  groupStream: {
    height: dimensions.STREAM_CONTAINER_HEIGHT,
    width: '100%',
  },
}

export default function ResourceActivityStreamsContainer(props) {
  const {
    activeStream,
    activities,
    resourceActivityDays,
    resources,
    streamsGroupedByActivities,
    streamsGroupedByResources,
    viewGroupedBy,
    updateStreamDaySelection,
  } = props

  const activityGroups = () => {
    const groupedStreams = streamsGroupedByActivities
    const list = []

    activities.ids.forEach((activity_id) => {
      const activity = activities.lookup[activity_id]
      const streamsGroupedByActivity = groupedStreams[activity_id] || []

      list.push(<div key={`r${activity_id}`} style={{height: dimensions.STREAM_CONTAINER_HEIGHT}} />)

      streamsGroupedByActivity.forEach((stream) => {
        const isActive = stream.uid == activeStream.uid

        list.push(
          <ResourceActivityStream
            key={stream.uid}
            isActive={isActive}
            resourceActivityDays={resourceActivityDays}
            selectedStreamDaysLookup={activeStream.selectedStreamDaysLookup}
            stream={stream}
            updateStreamDaySelection={updateStreamDaySelection}
          />
        )
      })

      list.push(<StatefulDivider key={`d${activity_id}`} />)
    })

    return list
  }

  const resourceGroups = () => {
    const groupedStreams = streamsGroupedByResources
    const list = []

    resources.ids.forEach((resource_id) => {
      const resource = resources.lookup[resource_id]
      const streamsGroupedByResource = groupedStreams[resource_id] || []

      list.push(<div key={`r${resource_id}`} style={styles.groupStream} />)

      streamsGroupedByResource.forEach((stream) => {
        const isActive = stream.uid == activeStream.uid

        list.push(
          <ResourceActivityStream
            key={stream.uid}
            isActive={isActive}
            resourceActivityDays={resourceActivityDays}
            selectedStreamDaysLookup={activeStream.selectedStreamDaysLookup}
            stream={stream}
            updateStreamDaySelection={updateStreamDaySelection}
          />
        )
      })

      list.push(<StatefulDivider key={`d${resource_id}`} />)
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
      <FlipMove {...animations.list}>
        {groups()}
      </FlipMove>
    </div>
  )
}

ResourceActivityStreamsContainer.propTypes = {
  activeStream: PropTypes.object.isRequired,
  activities: PropTypes.object.isRequired,
  resourceActivityDays: PropTypes.object.isRequired,
  resources: PropTypes.object.isRequired,
  streamsGroupedByActivities: PropTypes.object.isRequired,
  streamsGroupedByResources: PropTypes.object.isRequired,
  viewGroupedBy: PropTypes.string.isRequired,
  updateStreamDaySelection: PropTypes.func.isRequired,
}

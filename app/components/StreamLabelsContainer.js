import React, { PropTypes } from 'react'
import FlipMove from 'react-flip-move'
import {List} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'

import StatefulDivider from './StatefulDivider'
import StreamLabelGroup from './StreamLabelGroup'
import StreamLabel from './StreamLabel'
import StreamAdder from './StreamAdder'
import dimensions from './../constants/dimensions'
import animations from './../constants/animations'

const styles = {
  List: {
    paddingTop: 0,
    paddingBottom: dimensions.SCHEDULE_BOTTOM_PADDING,
  },
  UnnestedListItem: {
    paddingLeft: 0,
  },
  NestedListItem: {
    paddingLeft: dimensions.STREAM_LABEL_INDENT,
  },
  StreamAdder: {
    marginLeft: dimensions.STREAM_LABEL_INDENT + dimensions.desktopGutterLess,
    marginRight: dimensions.desktopGutterLess,
    height: dimensions.STREAM_CHANNEL_HEIGHT,
    display: 'block',
  },
}

export default function StreamLabelsContainer(props) {
  const {
    editResource,
    editActivity,
    changeActiveStream,
    activeStream,
    activities,
    resources,
    streamGrouping,
    streamsGroupedByActivities,
    streamsGroupedByResources,
    viewGroupedBy,
  } = props

  const resourceAvatar = (
    <Avatar icon={<FontIcon className="material-icons">person</FontIcon>} />
  )

  const activityAvatar = (
    <Avatar icon={<FontIcon className="material-icons">widgets</FontIcon>} />
  )


  const activityGroups = () => {
    const groupedStreams = streamsGroupedByActivities
    const list = []

    activities.ids.forEach((activity_id) => {
      const activity = activities.lookup[activity_id]
      const activityStreams = groupedStreams[activity_id] || []

      list.push(
        <StreamLabelGroup
          key={`a${activity_id}`}
          label={activity.name}
          onEdit={() => editActivity(activity)}
          layoutStyles={styles.UnnestedListItem}
          avatar={activityAvatar}
        />
      )

      activityStreams.forEach((stream) => {
        if (stream.hasWorkedOrScheduledDays) {
          const resource = resources.lookup[stream.resource_id]
          list.push(
            <StreamLabel
              key={stream.uid}
              uid={stream.uid}
              onTouchTap={changeActiveStream}
              isActive={stream.uid == activeStream.uid}
              label={resource.name}
              layoutStyles={styles.NestedListItem}
              avatar={resourceAvatar}
            />
          )
        }
      })

      list.push(
        <StreamAdder
          key={`streamAdder-${activity_id}`}
          hintText="Add Resource"
          onAdd={() => {}}
          layoutStyles={styles.StreamAdder}
          streamCollection={activityStreams}
        />
      )

      list.push(<StatefulDivider key={`d${activity_id}`} />)
    })

    return list
  }

  const resourceGroups = () => {
    const groupedStreams = streamsGroupedByResources
    const list = []

    resources.ids.forEach((resource_id) => {
      const resource = resources.lookup[resource_id]
      const resourceStreams = groupedStreams[resource_id] || []

      list.push(
        <StreamLabelGroup
          key={`r${resource_id}`}
          label={resource.name}
          onEdit={() => editResource(resource)}
          layoutStyles={styles.UnnestedListItem}
          avatar={resourceAvatar}
        />
      )

      resourceStreams.forEach((stream) => {
        if (stream.hasWorkedOrScheduledDays) {
          const activity = activities.lookup[stream.activity_id]
          list.push(
            <StreamLabel
              key={stream.uid}
              uid={stream.uid}
              onTouchTap={changeActiveStream}
              isActive={stream.uid == activeStream.uid}
              label={activity.name}
              layoutStyles={styles.NestedListItem}
              avatar={activityAvatar}
            />
          )
        }
      })

      list.push(
        <StreamAdder
          key={`streamAdder-${resource_id}`}
          hintText="Add Activity"
          onAdd={() => {}}
          layoutStyles={styles.StreamAdder}
          streamCollection={resourceStreams}
        />
      )

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
    <List style={styles.List} className="StreamLabelsContainer">
      <FlipMove {...animations.list}>
        { groups() }
      </FlipMove>
    </List>
  )
}

StreamLabelsContainer.propTypes = {
  editResource: PropTypes.func.isRequired,
  editActivity: PropTypes.func.isRequired,
  changeActiveStream: PropTypes.func.isRequired,
  activeStream: PropTypes.object.isRequired,
  activities: PropTypes.object.isRequired,
  resources: PropTypes.object.isRequired,
  streamGrouping: PropTypes.string.isRequired,
  streamsGroupedByActivities: PropTypes.object.isRequired,
  streamsGroupedByResources: PropTypes.object.isRequired,
  viewGroupedBy: PropTypes.string.isRequired,
}

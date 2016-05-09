import React from 'react'
import FlipMove from 'react-flip-move'
import {List} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import FontIcon from 'material-ui/FontIcon'

import StatefulDivider from './StatefulDivider'
import StreamLabelGroup from './StreamLabelGroup'
import StreamLabel from './StreamLabel'
import dimensions from './../constants/dimensions'
import animations from './../constants/animations'

const styles = {
  List: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  UnnestedListItem: {
    paddingLeft: 0,
  },
  NestedListItem: {
    paddingLeft: 42,
  }
}

export default function StreamLabelsContainer(props) {
  const {
    streams,
    resources,
    activities,
    viewGroupedBy,
    editResource,
    editActivity,
    changeActiveStream,
    streamsGroupedByActivities,
    streamsGroupedByResources
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
      const streamsGroupedByActivity = groupedStreams[activity_id] || []

      list.push(<StatefulDivider key={`d${activity_id}`} />)

      list.push(
        <StreamLabelGroup
          key={`a${activity_id}`}
          label={activity.name}
          onEdit={() => editActivity(activity)}
          layoutStyles={styles.UnnestedListItem}
          avatar={activityAvatar}
        />
      )

      streamsGroupedByActivity.forEach((stream) => {
        const resource = resources.lookup[stream.resource_id] || {}
        list.push(
          <StreamLabel
            key={stream.uid}
            uid={stream.uid}
            onTouchTap={changeActiveStream}
            isActive={stream.uid == streams.active.uid}
            label={resource.name || '-'}
            layoutStyles={styles.NestedListItem}
            avatar={resourceAvatar}
          />
        )
      })
    })

    return list
  }

  const resourceGroups = () => {
    const groupedStreams = streamsGroupedByResources
    const list = []

    resources.ids.forEach((resource_id) => {
      const resource = resources.lookup[resource_id]
      const streamsGroupedByResource = groupedStreams[resource_id] || []

      list.push(<StatefulDivider key={`d${resource_id}`} />)

      list.push(
        <StreamLabelGroup
          key={`r${resource_id}`}
          label={resource.name}
          onEdit={() => editResource(resource)}
          layoutStyles={styles.UnnestedListItem}
          avatar={resourceAvatar}
        />
      )

      streamsGroupedByResource.forEach((stream) => {
        const activity = activities.lookup[stream.activity_id] || {}
        list.push(
          <StreamLabel
            key={stream.uid}
            uid={stream.uid}
            onTouchTap={changeActiveStream}
            isActive={stream.uid == streams.active.uid}
            label={activity.name || '-'}
            layoutStyles={styles.NestedListItem}
            avatar={activityAvatar}
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
    <List style={styles.List} className="StreamLabelsContainer">
      <FlipMove {...animations.list}>
        { groups() }
      </FlipMove>
    </List>
  )
}

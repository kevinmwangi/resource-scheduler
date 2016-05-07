import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import ScheduleTable from '../components/ScheduleTable'
import EditorStream from '../components/EditorStream'
import EditorResource from '../components/EditorResource'
import EditorActivity from '../components/EditorActivity'
import NewButton from '../components/NewButton'

const styles = {
  Schedule: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    padding: 16,
  },
}

export default function Schedule (props) {
  const {
    newResource, cancelNewResource, createResource,
    editResource, cancelEditResource, updateResource,
    newActivity, cancelNewActivity, createActivity,
    editActivity, cancelEditActivity, updateActivity,
    newStream, cancelNewStream, createStream,
    editing,
    streams,
    resources,
    activities,
  } = props

  return (
    <div className="Schedule" style={styles.Schedule}>

      <EditorResource
        isOpen={!!editing.newResource || !!editing.existingResource}
        onCancel={editing.newResource ? cancelNewResource : cancelEditResource}
        onSubmit={editing.newResource ? createResource : updateResource}
        resource={editing.newResource || editing.existingResource}
      />

      <EditorActivity
        isOpen={!!editing.newActivity || !!editing.existingActivity}
        onCancel={editing.newActivity ? cancelNewActivity : cancelEditActivity}
        onSubmit={editing.newActivity ? createActivity : updateActivity}
        resource={editing.newActivity || editing.existingActivity}
      />

      <EditorStream
        isOpen={!!editing.stream}
        onCancel={cancelNewStream}
        onSubmit={createStream}
        resources={resources}
        activities={activities}
      />

      <ScheduleTable
        {...props}
        style={styles.ScheduleTable}
      />

      <NewButton
        onNewStream={newStream}
        onNewResource={newResource}
        onNewActivity={newActivity}
      />

    </div>
  )
}

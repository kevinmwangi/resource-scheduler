import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import FormStream from './FormStream'

const styles = {
  dialog: {
    width: '90%',
  },
}

export default function EditorStream(props) {
  const {
    isOpen,
    onCancel,
    onSubmit,
    activities,
    resources,
  } = props

  const formId = 'formStream'

  const actions = [
    <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={onCancel}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      disabled={false}
      type='submit'
      form={formId}
    />,
  ]

  return (
    <div className='EditorStream'>
      <Dialog
        title="New Stream"
        actions={actions}
        modal={true}
        open={isOpen}
        contentStyle={styles.dialog}
        autoScrollBodyContent={true}
      >
        <FormStream
          formId={formId}
          onSubmit={onSubmit}
        />

      </Dialog>
    </div>
  )
}


EditorStream.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  resources: PropTypes.object.isRequired,
  activities: PropTypes.object.isRequired,
}

import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import FormActivity from './FormActivity'

const styles = {}

export default function EditorActivity(props) {
  const {
    isOpen,
    onCancel,
    onSubmit,
  } = props

  const formId = 'formActivity'

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
    />
  ]

  return (
    <div className='EditorActivity'>
      <Dialog
        title="New Activity"
        actions={actions}
        modal={true}
        open={isOpen}
      >
        <FormActivity
          formId={formId}
          onSubmit={onSubmit}
        />
      </Dialog>
    </div>
  )
}

EditorActivity.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

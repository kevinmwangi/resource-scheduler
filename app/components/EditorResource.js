import React, { Component, PropTypes } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'

import FormResource from './FormResource'

const styles = {}

export default function EditorResource(props) {
  const {
    isOpen,
    onCancel,
    onSubmit,
  } = props

  const formId = 'formResource'

  const actions = [
    <FlatButton
      label="Cancel"
      secondary={true}
      type='button'
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
    <div className='EditorResource'>
      <Dialog
        title="New Resource"
        actions={actions}
        modal={true}
        open={isOpen}
      >
        <FormResource
          formId={formId}
          onSubmit={onSubmit}
        />
      </Dialog>
    </div>
  )
}

EditorResource.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

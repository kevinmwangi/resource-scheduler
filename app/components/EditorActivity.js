import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {}

export default function EditorActivity(props) {
  const {
    open,
    onClose,
  } = props

  const actions = [
    <FlatButton
      label="Cancel"
      secondary={true}
      onTouchTap={onClose}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      disabled={false}
      onTouchTap={onClose}
    />,
  ]

  return (
    <div className='EditorActivity'>
      <Dialog
        title="New Activity"
        actions={actions}
        modal={true}
        open={open}
      >
        <TextField
          hintText="Name"
          floatingLabelText="Name"
          fullWidth={true}
        />
      </Dialog>
    </div>
  )
}

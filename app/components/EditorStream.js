import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

const styles = {
  dialog: {
    width: '90%',
  },
  form: {},
  selectField: {
    display: 'block',
    maxWidth: '100%',
  },
  datePickerField: {
    maxWidth: '100%',
  },
  datePickerTextField: {
    maxWidth: '100%',
  },
  checkbox: {
  },
  checkboxes: {
    marginTop: 32,
    marginLeft: 32,
  },
  numberField: {
    maxWidth: '100%',
  }
}

export default function EditorStream(props) {
  const {
    open,
    onClose,
    startDate,
    endDate,
    activity,
    resource,
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

  const selectActivity = () => {}
  const selectResource = () => {  }

  return (
    <div className='EditorStream'>
      <Dialog
        title="New Stream"
        actions={actions}
        modal={true}
        open={open}
        contentStyle={styles.dialog}
        autoScrollBodyContent={true}
      >

        <div className='Form' style={styles.form}>

          <SelectField
            // value={resource}
            onChange={selectResource}
            hintText="Resource"
            floatingLabelText="Resource"
            style={styles.selectField}
            disabled={false}
          >
            <MenuItem value={1} primaryText="Fred" />
            <MenuItem value={2} primaryText="Neil" />
            <MenuItem value={3} primaryText="Jeff" />
          </SelectField>

          <SelectField
            // value={activity}
            onChange={selectActivity}
            hintText="Activity"
            floatingLabelText="Activity"
            style={styles.selectField}
            disabled={false}
          >
            <MenuItem value={1} primaryText="Holiday" />
            <MenuItem value={2} primaryText="Project 1" />
            <MenuItem value={3} primaryText="Sick" />
          </SelectField>

          <DatePicker
            hintText="Start date"
            floatingLabelText="Start date"
            mode="portrait"
            disabled={false}
            autoOk={true}
            container={'dialog'}
            // value={startDate}
            textFieldStyle={styles.datePickerTextField}
            style={styles.datePickerField}
          />

          <DatePicker
            hintText="End date"
            floatingLabelText="End date"
            mode="portrait"
            disabled={false}
            autoOk={true}
            container={'dialog'}
            // value={endDate}
            textFieldStyle={styles.datePickerTextField}
            style={styles.datePickerField}
          />

          <div style={styles.checkboxes}>
            <Checkbox
              autoWidth={true}
              label="Monday"
              defaultChecked={true}
              style={styles.checkbox}
            />
            <Checkbox
              autoWidth={true}
              label="Tuesday"
              defaultChecked={true}
              style={styles.checkbox}
            />
            <Checkbox
              autoWidth={true}
              label="Wednesday"
              defaultChecked={true}
              style={styles.checkbox}
            />
            <Checkbox
              autoWidth={true}
              label="Thursday"
              defaultChecked={true}
              style={styles.checkbox}
            />
            <Checkbox
              autoWidth={true}
              label="Friday"
              defaultChecked={true}
              style={styles.checkbox}
            />
            <Checkbox
              autoWidth={true}
              label="Saturday"
              defaultChecked={false}
              style={styles.checkbox}
            />
            <Checkbox
              autoWidth={true}
              label="Sunday"
              defaultChecked={false}
              style={styles.checkbox}
            />

          </div>

          <TextField
            hintText="leave blank if unknown"
            floatingLabelText="hours"
            type='number'
            style={styles.numberField}
          />

        </div>

      </Dialog>
    </div>
  )
}

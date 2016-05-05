import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'

import WrapperSelectField from './WrapperSelectField'
import WrapperDatePicker from './WrapperDatePicker'

const styles = {
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

function FormStream ({
    formId,
    fields: {
      hours,
      startDate,
      endDate,
      activity_id,
      resource_id,
    },
    handleSubmit,
    resources,
    activities,
  }) {

  return (
    <form id={formId}
      onSubmit={handleSubmit}
      className='FormStream'
      style={styles.form}
      >

      <WrapperSelectField
        hintText="Resource"
        floatingLabelText="Resource"
        style={styles.selectField}
        disabled={false}
        {...resource_id}
        >
        <MenuItem value={1} primaryText="Fred" />
        <MenuItem value={2} primaryText="Neil" />
        <MenuItem value={3} primaryText="Jeff" />
      </WrapperSelectField>

      <WrapperSelectField
        hintText="Activity"
        floatingLabelText="Activity"
        style={styles.selectField}
        disabled={false}
        {...activity_id}
        >
        <MenuItem value={1} primaryText="Holiday" />
        <MenuItem value={2} primaryText="Project 1" />
        <MenuItem value={3} primaryText="Sick" />
      </WrapperSelectField>

      <WrapperDatePicker
        hintText="Start date"
        floatingLabelText="Start date"
        mode="portrait"
        disabled={false}
        autoOk={true}
        container={'dialog'}
        textFieldStyle={styles.datePickerTextField}
        style={styles.datePickerField}
        {...startDate}
      />

      <WrapperDatePicker
        hintText="End date"
        floatingLabelText="End date"
        mode="portrait"
        disabled={false}
        autoOk={true}
        container={'dialog'}
        textFieldStyle={styles.datePickerTextField}
        style={styles.datePickerField}
        {...endDate}
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
        {...hours}
        floatingLabelText="hours"
        type='number'
        style={styles.numberField}
      />

    </form>
  )
}

FormStream.propTypes = {
  formId: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
}

FormStream = reduxForm({
  form: 'resource',
  fields: [
    'hours',
    'startDate',
    'endDate',
    'activity_id',
    'resource_id',
  ],
})(FormStream)

export default FormStream

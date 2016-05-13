import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const styles = {
  Form: {
    padding: 24,
  }
}

function FormStreamDays ({
    formId,
    fields: { hours, scheduled },
    handleSubmit,
    resetForm,
  }) {

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      style={styles.Form}
      className='FormStreamDays'
      >

      <RadioButtonGroup {...scheduled} defaultSelected={null} >
        <RadioButton
          value="true"
          label="Scheduled"
          style={styles.radioButton}
        />
        <RadioButton
          value="false"
          label="Not scheduled"
          style={styles.radioButton}
        />
      </RadioButtonGroup>

      <TextField hintText="Enter ? to clear"
        floatingLabelText="hours"
        fullWidth={true}
        {...hours}
      />

      <RaisedButton
        label="Save"
        primary={true}
        keyboardFocused={false}
        type='submit'
        form={formId}
      />
    </form>
  )
}

FormStreamDays.propTypes = {
  formId: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
}

FormStreamDays = reduxForm({
  form: 'streamDaysSettings',
  fields: [ 'hours', 'scheduled' ],
})(FormStreamDays)

export default FormStreamDays

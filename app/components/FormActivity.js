import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

function FormActivity ({
    formId,
    fields: { name },
    handleSubmit,
  }) {

  return (
    <form id={formId} onSubmit={handleSubmit} className='FormActivity'>
      <TextField
        hintText="Name"
        floatingLabelText="Name"
        fullWidth={true}
        {...name}
      />
    </form>
  )
}

FormActivity.propTypes = {
  formId: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
}

FormActivity = reduxForm({
  form: 'resource',
  fields: ['name'],
})(FormActivity)

export default FormActivity

import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

function FormResource ({
    formId,
    fields: { name },
    handleSubmit,
  }) {

  return (
    <form id={formId} onSubmit={handleSubmit} className='FormResource'>
      <TextField
        hintText="Name"
        floatingLabelText="Name"
        fullWidth={true}
        {...name}
      />
    </form>
  )
}

FormResource.propTypes = {
  formId: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
}

FormResource = reduxForm({
  form: 'resource',
  fields: ['name'],
})(FormResource)

export default FormResource

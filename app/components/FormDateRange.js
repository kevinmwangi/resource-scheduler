import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import DatePicker from './WrapperDatePicker'

function FormDateRange ({
    formId,
    fields: { startDate, endDate },
    handleSubmit,
  }) {

  return (
    <form id={formId} onSubmit={handleSubmit} className='FormDateRange'>
      <DatePicker
        hintText="Start date"
        floatingLabelText="Start date"
        mode="portrait"
        autoOk={true}
        {...startDate}
      />

      <DatePicker
        hintText="End date"
        floatingLabelText="End date"
        mode="portrait"
        autoOk={true}
        {...endDate}
      />
    </form>
  )
}

FormDateRange.propTypes = {
  formId: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
}

FormDateRange = reduxForm({
  form: 'dateRange',
  fields: ['startDate', 'endDate'],
})(FormDateRange)

export default FormDateRange

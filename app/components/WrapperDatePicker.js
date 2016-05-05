import React, { Component, PropTypes } from 'react'
import DatePicker from 'material-ui/DatePicker'

// Wrapper component needed to get DatePickerField to work with redux-form
export default class DatePickerWrapper extends Component {
  onChange(evt, date) {
    if (this.props.onChange) {
      this.props.onChange(date);
    }
  }
  render() {
    return <DatePicker {...this.props} onChange={this.onChange.bind(this)}/>
  }
}

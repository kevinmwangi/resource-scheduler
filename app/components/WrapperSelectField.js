import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'


// Wrapper component needed to get SelectField to work with redux-form
export default class WrapperSelectField extends Component{
  onChange(evt, index, value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
  render() {
    return (
      <SelectField {...this.props} onChange={this.onChange.bind(this)}>
        {this.props.children}
      </SelectField>
    );
  }
}

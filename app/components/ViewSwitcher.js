import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  SelectField: {
    flex: 'none',
    width: '100%',
  }
}

export default function ViewSwitcher (props)  {
  const {
    onViewGroupChange,
    viewGroupedBy,
  } = props

  const handleChange = (event, index, value) => onViewGroupChange(value)

  return (
    <SelectField
      style={styles.SelectField}
      value={props.viewGroupedBy}
      floatingLabelText="Group streams by"
      disabled={false}
      onChange={handleChange}
    >
      <MenuItem value={'resource_id'} primaryText="Resource" />
      <MenuItem value={'activity_id'} primaryText="Activity" />
    </SelectField>
  )
}

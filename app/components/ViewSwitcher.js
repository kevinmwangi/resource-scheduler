import React from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import colors from '../constants/colors'

const styles = {
  selectStyle: {
    height: '100%',
  },
  label: {
    fontWeight: 'bold'
  }
}

export default function ViewSwitcher (props)  {
  const {
    onViewGroupChange,
    viewGroupedBy,
    layoutStyles,
  } = props

  const handleChange = (event, index, value) => onViewGroupChange(value)

  return (
    <div
      className='ViewSwitcher'
      style={layoutStyles}
      >
      <SelectField
        style={styles.selectStyle}
        labelStyle={styles.label}
        value={viewGroupedBy}
        onChange={handleChange}
        autoWidth={true}
        fullWidth={true}
        >
        <MenuItem value={'resource_id'} primaryText="Resources" />
        <MenuItem value={'activity_id'} primaryText="Activities" />
      </SelectField>
    </div>
  )
}

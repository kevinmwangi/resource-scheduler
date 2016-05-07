import React from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import colors from '../constants/colors'

const styles = {
  DropDownMenu: {
    width: '100%',
  },
}

export default function ViewSwitcher (props)  {
  const {
    onViewGroupChange,
    viewGroupedBy,
  } = props

  const handleChange = (event, index, value) => onViewGroupChange(value)

  return (
    <DropDownMenu
      style={styles.DropDownMenu}
      value={viewGroupedBy}
      onChange={handleChange}
      autoWidth={false}
      >
      <MenuItem value={'resource_id'} primaryText="Resources" />
      <MenuItem value={'activity_id'} primaryText="Activities" />
    </DropDownMenu>
  )
}

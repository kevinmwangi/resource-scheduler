import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import colors from '../constants/colors'

const styles = {
  AppBar: {}
}

export default function ScheduleAppBar (props) {
  const {
    layoutStyles,
    newResource,
    newActivity,
  } = props

  const handleMenuSelection = (event, menuItem) => {
    switch (menuItem.key) {
      case 'resource':
        newResource()
        break;
      case 'activity':
        newActivity()
        break;
      default:
    }
  }

  return (
    <AppBar
      zDepth={2}
      title="Scheduler"
      iconElementLeft={
        <IconMenu
          iconButtonElement={
            <IconButton>
              <NavigationMenu color={colors.alternateTextColor} />
            </IconButton>
          }
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          style={styles.IconMenu}
          iconStyle={styles.iconStyle}
          onItemTouchTap={handleMenuSelection}
          >
          <MenuItem key={'resource'} primaryText='New Resource'/>
          <MenuItem key={'activity'} primaryText='New Activity' />
        </IconMenu>

      }
      style={Object.assign({}, styles.AppBar, layoutStyles)}
    />
  )
}

ScheduleAppBar.propTypes = {
  layoutStyles: PropTypes.object.isRequired,
  newResource: PropTypes.func.isRequired,
  newActivity: PropTypes.func.isRequired,
}

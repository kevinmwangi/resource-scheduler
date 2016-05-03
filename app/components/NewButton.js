import React from 'react'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ContentAdd from 'material-ui/svg-icons/content/add'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const styles = {
  IconMenu: {
    zIndex: 100,
    position: 'fixed',
    bottom: 16,
    right: 16,
    float: 'right',
  },
}

export default function NewButton (props) {
  const  {
    onNewResource,
    onNewActivity,
    onNewStream,
  } = props

  const handleMenuSelection = (event, menuItem) => {
    switch (menuItem.key) {
      case 'resource':
        onNewResource()
        break;
      case 'activity':
        onNewActivity()
        break;
      case 'stream':
        onNewStream()
        break;
      default:
    }
  }

  return (
    <IconMenu
      iconButtonElement={
        <FloatingActionButton zDepth={4} primary={true}>
          <ContentAdd />
        </FloatingActionButton>
      }
      anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
      style={styles.IconMenu}
      iconStyle={styles.iconStyle}
      onItemTouchTap={handleMenuSelection}
    >
      <MenuItem key={'resource'} primaryText='New Resource'/>
      <MenuItem key={'activity'} primaryText='New Activity' />
      <MenuItem key={'stream'} primaryText='New Stream' />
    </IconMenu>
  )
}


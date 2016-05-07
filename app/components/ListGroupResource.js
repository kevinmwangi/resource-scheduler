import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/Avatar'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

import colors from '../constants/colors'

const styles = {
  ListItem: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '20px 56px 20px 73px',
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    color: colors.textColor,
  },
}

export default class ListItemResource extends Component {
  static propTypes = {
    resource: PropTypes.object.isRequired,
  }

  layoutStyles = this.props.layoutStyles || {}

  render() {
    const icon = <FontIcon className="material-icons">person</FontIcon>
    const avatar = <Avatar icon={icon} />

    const editIcon = (
      <IconButton onTouchTap={() => alert('resource')}>
        <FontIcon className="material-icons" hoverColor={colors.accent1Color}>edit</FontIcon>
      </IconButton>
    )

    return (
      <ListItem className="ListItemResource"
        leftAvatar={avatar}
        rightIconButton={editIcon}
        disabled={true}
        style={
          Object.assign(styles.ListItem, this.layoutStyles)
        }
        >
        <div style={styles.text}>
          {this.props.resource.name}
        </div>
      </ListItem>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

import colors from '../constants/colors'

const styles = {
  ListItem: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '20px 56px 20px 72px',
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    color: colors.textColor,
  },
}

export default class streamLabelGroup extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    avatar: PropTypes.object.isRequired,
  }

  render() {
    const {
      label,
      onEdit,
      avatar,
      layoutStyles,
    } = this.props

    const editIcon = (
      <IconButton onTouchTap={onEdit}>
        <FontIcon
          className="material-icons"
          hoverColor={colors.accent1Color}
          >
          edit
        </FontIcon>
      </IconButton>
    )

    return (
      <ListItem className="ListItemActivity"
        leftAvatar={avatar}
        rightIconButton={editIcon}
        disabled={true}
        style={Object.assign({}, styles.ListItem, layoutStyles || {})}
        >
        <div style={styles.text}>
          {label}
        </div>
      </ListItem>
    )
  }
}

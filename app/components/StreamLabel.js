import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui/List'

import colors from '../constants/colors'

const styles = {
  ListItem: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  activated: {
    color: colors.alternateTextColor,
    backgroundColor: colors.streamLabelActiveColor,
  },
}

export default class StreamLabel extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onTouchTap: PropTypes.func.isRequired,
    avatar: PropTypes.object.isRequired,
  }

  render() {
    const {
      label,
      uid,
      isActive,
      onTouchTap,
      avatar,
      layoutStyles,
    } = this.props

    return (
      <ListItem className="ListItemActivity"
        leftAvatar={avatar}
        onTouchTap={() => onTouchTap(uid)}
        style={
          Object.assign(
            {},
            isActive ? styles.activated : {},
            styles.ListItem,
            layoutStyles || {}
          )
        }
        >
        <div style={styles.text}>
          {label}
        </div>
      </ListItem>
    )
  }
}

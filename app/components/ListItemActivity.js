import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/Avatar'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon';

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
    backgroundColor: colors.streamActiveColor,
  },
}

export default class ListItemActivity extends Component {
  static propTypes = {
    activityName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onTouchTap: PropTypes.func.isRequired,
  }

  layoutStyles = this.props.layoutStyles || {}

  render() {
    const icon = <FontIcon className="material-icons">widgets</FontIcon>
    const avatar = <Avatar icon={icon} />

    const activationStyle = this.props.isActive ? styles.activated : {}

    return (
      <ListItem className="ListItemActivity"
        leftAvatar={avatar}
        onTouchTap={() => this.props.onTouchTap(this.props.uid)}
        style={
          Object.assign(
            {},
            activationStyle,
            styles.ListItem,
            this.layoutStyles
          )
        }
        >
        <div style={styles.text}>
          {this.props.activityName}
        </div>
      </ListItem>
    )
  }
}

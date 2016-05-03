import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/Avatar'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon';

const styles = {
  ListItem: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }
}

export default class ListItemActivity extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
  }

  layoutStyles = this.props.layoutStyles || {}

  render() {
    const icon = <FontIcon className="material-icons">widgets</FontIcon>
    const avatar = <Avatar icon={icon} />

    return (
      <ListItem className="ListItemActivity"
        primaryText={this.props.activity.name}
        leftAvatar={avatar}
        style={
          Object.assign(styles.ListItem, this.layoutStyles)
        }
      />
    )
  }
}

import React, { Component, PropTypes } from 'react'
import Avatar from 'material-ui/Avatar'
import { ListItem } from 'material-ui/List'
import FontIcon from 'material-ui/FontIcon';

const styles = {
  ListItem: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}

export default class ListItemResource extends Component {
  static propTypes = {
    resourceName: PropTypes.string.isRequired,
  }

  layoutStyles = this.props.layoutStyles || {}

  render() {
    const icon = <FontIcon className="material-icons">person</FontIcon>
    const avatar = <Avatar icon={icon} />

    return (
      <ListItem className="ListItemResource"
        leftAvatar={avatar}
        style={
          Object.assign(styles.ListItem, this.layoutStyles)
        }
        >
        <div style={styles.text}>
          {this.props.resourceName}
        </div>
      </ListItem>
    )
  }
}

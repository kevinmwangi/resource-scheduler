import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const styles = {
  StreamAdder: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  SelectField: {
    height: '100%',
  }
}

export default class StreamAdder extends Component {
  static propTypes = {
    hintText: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
    streamCollection: PropTypes.array.isRequired,
  }

  render() {
    const {
      onAdd,
      hintText,
      layoutStyles,
      streamCollection,
    } = this.props

    const menuItems = streamCollection.map((stream) => {
      return (
        <MenuItem
          key={stream.uid}
          value={stream.uid}
          disabled={stream.hasWorkedOrScheduledDays}
          primaryText={stream.label}
        />
      )
    })

    return (
      <div
        className="StreamAdder"
        style={ Object.assign({}, styles.StreamAdder, layoutStyles || {}) }
        >
        <SelectField
          value={null}
          hintText={hintText}
          fullWidth={true}
          onChange={onAdd}
          style={styles.SelectField}
          >
            {menuItems}
        </SelectField>
      </div>
    )
  }
}

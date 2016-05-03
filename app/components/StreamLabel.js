import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'

import Dimensions from '../constants/dimensions'

const padding = 10
const width = Dimensions.STREAM_LABEL_WIDTH - padding
const height = Dimensions.STREAM_HEIGHT -
                2 * Dimensions.BORDER_THICKNESS;

const styles = {
  label: {
    height: height,
    width: width,
    marginTop: Dimensions.BORDER_THICKNESS,
    marginBottom: Dimensions.BORDER_THICKNESS,
    lineHeight: height + 'px',
    display: 'inline-block',
    paddingLeft: padding,
  },
}

export default class StreamLabel extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Paper className="StreamLabel" zDepth={0} rounded={false}>
        <label style={styles.label}>
          {this.props.value}
        </label>
      </Paper>
    )
  }
}

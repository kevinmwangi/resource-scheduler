import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'

import FormStreamDays from './FormStreamDays'
import colors from '../constants/colors'

const styles = {
  Drawer: {
    height: 300,
    bottom: 0,
    top: undefined,
  },
  heading: {
    margin: 0,
    padding: '24px 24px 20px',
    color: colors.darkBlack,
  },
}

export default function StreamDaysEditor (props) {
  const {
    activeStream,
    updateStreamDays,
  } = props

  const isOpen = !!Object.keys(activeStream.selectedStreamDaysLookup).length

  const formProps = {
    formId: 'streamDaysSettings',
    onSubmit: updateStreamDays,
    initialValues: undefined,
  }


  const formElement = isOpen ? <FormStreamDays {...formProps} /> : null

  return (
    <Drawer
      width={220}
      openSecondary={true}
      open={isOpen}
      docked={true}
      containerStyle={styles.Drawer}
      zDepth={3}
      >
      <h3 style={styles.heading} >Edit Selection</h3>
      {formElement}
    </Drawer>
  )
}

StreamDaysEditor.propTypes = {
  activeStream: PropTypes.object.isRequired,
  updateStreamDays: PropTypes.func.isRequired
}


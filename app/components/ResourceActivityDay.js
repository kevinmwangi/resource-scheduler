import React, { PropTypes } from 'react'

import dimensions from '../constants/dimensions'
import colors from '../constants/colors'

const height = dimensions.STREAM_HEIGHT - 4 * dimensions.BORDER_THICKNESS

const styles = {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: dimensions.DAY_WIDTH - 2 * dimensions.BORDER_THICKNESS,
    height: height,
    borderWidth: dimensions.BORDER_THICKNESS,
    borderTopWidth: dimensions.BORDER_THICKNESS,
    borderBottomWidth: dimensions.BORDER_THICKNESS,
    marginTop: dimensions.BORDER_THICKNESS,
    marginBottom: dimensions.BORDER_THICKNESS,
    borderStyle: 'solid',
    borderColor: colors.canvasColor,
    verticalAlign: 'bottom',
    overflowY: 'hidden',
    zIndex: 0,
  },
  textContainer: {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 2,
    pointerEvents: 'none',
  },
  text: {
    display: 'inline-flex',
    justifyContent: 'center',
    flex: '1 0 auto',
    pointerEvents: 'none',
  },
  scheduled: {
    backgroundColor: colors.scheduledColor,
  },
  unscheduled: {
    backgroundColor: colors.streamColor,
  },
  bar: {
    display: 'block',
    background: colors.barColor,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
    pointerEvents: 'none',
  },
  overlay: {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 3,
  },
  overlaySelected: {
    boxShadow: `inset 0px 4px 8px ${colors.dayInsetColor}`,
    backgroundColor: colors.daySelectedColor,
  },
  overlayUnselected: {
    boxShadow: 'none',
  },
  overlayStreamActive: {
    pointerEvents: 'auto',
    cursor: 'pointer',
  },
  overlayStreamInactive: {
    pointerEvents: 'none',
    cursor: 'auto',
  }

}

export default function ResourceActivityDay(props) {
  const {
    scheduled,
    hours,
    isSelected,
    selectionModeOn,
    streamIsActive,
    uid,
  } = props

  const hrsKnown = typeof hours == 'number'
  const containerStyles = Object.assign(
    {},
    styles.container,
    scheduled ? styles.scheduled : styles.unscheduled
  )

  const barStyles = Object.assign(
    {
      height: hrsKnown ? hours * dimensions.HOUR_HEIGHT : 0,
    },
    styles.bar
  )

  const overlayStyles = Object.assign(
    {},
    styles.overlay,
    streamIsActive ? styles.overlayStreamActive : styles.overlayStreamInactive,
    isSelected ? styles.overlaySelected : styles.overlayUnselected
  )

  return (
    <div
      className="ResourceActivityDay"
      style={containerStyles}>
      <div style={styles.textContainer}>
        <div style={styles.text}>
          {hrsKnown ? hours : ''}
        </div>
      </div>
      <div
        className="Overlay"
        style={overlayStyles}
      />
      <div style={barStyles}/>
    </div>
  )
}

ResourceActivityDay.propTypes = {
  scheduled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  streamIsActive: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
  selectionModeOn: PropTypes.bool.isRequired,
}

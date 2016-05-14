import React, { PropTypes } from 'react'

import dimensions from '../constants/dimensions'
import colors from '../constants/colors'

const styles = {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: dimensions.DAY_INNER_WIDTH,
    height: dimensions.STREAM_INNER_HEIGHT,
    borderWidth: dimensions.BORDER_THICKNESS,
    marginTop: dimensions.BORDER_THICKNESS,
    marginBottom: dimensions.BORDER_THICKNESS,
    borderStyle: 'solid',
    borderColor: colors.canvasColor,
    verticalAlign: 'bottom',
    overflow: 'hidden',
    zIndex: 0,
  },
  containerStreamActive: {
    pointerEvents: 'auto',
    cursor: 'pointer',
  },
  containerStreamInactive: {
    pointerEvents: 'none',
    cursor: 'auto',
  },
  containerScheduled: {
    backgroundColor: colors.scheduledColor,
  },
  constainerUnscheduled: {
    backgroundColor: colors.streamColor,
  },
  containerSelected: {
    borderWidth: 2 * dimensions.BORDER_THICKNESS,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: -dimensions.BORDER_THICKNESS,
    marginRight: -dimensions.BORDER_THICKNESS,
    borderColor: colors.accent1Color,
    boxShadow: `inset 0px 3px 10px 0px  ${colors.dayInsetColor}`,
    zIndex: 1,
  },
  constainerUnselected: {
    zIndex: 0,
  },
  textContainer: {
    position: 'absolute',
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 4,
    pointerEvents: 'none',
  },
  textContainerSelected: {
    boxShadow: 'none',
    fontSize: '96%',
    backgroundColor: colors.daySelectedColor,
  },
  text: {
    display: 'inline-flex',
    justifyContent: 'center',
    flex: '1 0 auto',
    pointerEvents: 'none',
  },
  bar: {
    display: 'block',
    background: colors.barColor,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 3,
    pointerEvents: 'none',
  },
}

export default function ResourceActivityDay(props) {
  const {
    scheduled,
    hours,
    isSelected,
    streamIsActive,
    uid,
    startSelectingStreamDays,
    selectStreamDay,
    stopSelectingStreamDays,
  } = props

  const hrsKnown = typeof hours == 'number'
  const containerStyles = Object.assign(
    {},
    styles.container,
    scheduled ? styles.containerScheduled : styles.constainerUnscheduled,
    streamIsActive ? styles.containerStreamActive : styles.containerStreamInactive,
    isSelected ? styles.containerSelected : styles.containerUnselected
  )

  const barStyles = Object.assign(
    {
      height: hrsKnown ? hours * dimensions.HOUR_HEIGHT : 0,
    },
    styles.bar
  )

  const textContainerStyles = Object.assign(
    {},
    styles.textContainer,
    isSelected ? styles.textContainerSelected : {}
  )

  return (
    <div
      className="ResourceActivityDay"
      style={containerStyles}
      onMouseDown={(e) => {
        e.preventDefault()
        startSelectingStreamDays(uid)
      }}
      onMouseOver={() => selectStreamDay(uid)}
      onMouseUp={stopSelectingStreamDays}
      >
      <div style={textContainerStyles}>
        <div style={styles.text}>
          {hrsKnown ? hours : ''}
        </div>
      </div>
      <div style={barStyles}/>
    </div>
  )
}

ResourceActivityDay.propTypes = {
  scheduled: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
  streamIsActive: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
  startSelectingStreamDays: PropTypes.func,
  selectStreamDay: PropTypes.func,
  stopSelectingStreamDays: PropTypes.func,
}

import React, { PropTypes } from 'react'

import DayOfMonthStream from './DayOfMonthStream'
import MonthYearStream from './MonthYearStream'
import colors from '../constants/colors'

const styles = {
  TimeStream: {
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    background: colors.canvasColor,
    zIndex: 10,
  },
}

export default function TimeStream(props) {
  return (
    <div className="TimeStream" style={styles.TimeStream}>
      <MonthYearStream {...props} />
      <DayOfMonthStream {...props} />

    </div>
  )
}

TimeStream.propTypes = {
  dates: PropTypes.array.isRequired
}

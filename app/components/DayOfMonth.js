import React, { PropTypes } from 'react'
import Badge from 'material-ui/Badge'
import moment from 'moment'

import dimensions from '../constants/dimensions'
import colors from '../constants/colors'

const styles = {
  DayOfMonth: {
    flex: 'none',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.DAY_WIDTH - 2 * dimensions.BORDER_THICKNESS,
    borderColor: colors.BORDER,
    borderStyle: 'solid',
    borderWidth: dimensions.BORDER_THICKNESS,
    backgroundColor: colors.BACKGROUND,
  },
  weekday: {
    backgroundColor: colors.WEEKDAY,
  },
  weekend: {
    backgroundColor: colors.WEEKEND,
  },
}

export default function DayOfMonth({day}) {
  const momentDay = moment(day)
  const dayOfMonth = momentDay.date()
  const dayOfWeek = momentDay.day()
  const isWeekend = (dayOfWeek == 0) || (dayOfWeek == 6)

  const dayStyle = isWeekend ? styles.weekend : styles.weekday
  const style = Object.assign(styles.DayOfMonth, dayStyle)

  return (
    <div className="DayOfMonth" style={style}>
      <span>
        {dayOfMonth}
      </span>
    </div>
  )
}


DayOfMonth.propTypes = {
  day: PropTypes.string.isRequired
}

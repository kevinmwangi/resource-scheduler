import React, { PropTypes } from 'react'
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
    borderColor: colors.canvasColor,
    borderStyle: 'solid',
    borderWidth: dimensions.BORDER_THICKNESS,
    backgroundColor: colors.streamColor,
  },
  weekday: {
    backgroundColor: colors.streamColor,
    color: colors.textColor,
  },
  weekend: {
    backgroundColor: colors.streamDisabledColor,
    color: colors.textColor,
  },
  today: {
    backgroundColor: colors.accent1Color,
    color: colors.alternateTextColor,
  }
}

export default function DayOfMonth({day}) {
  const momentDay = moment(day)
  const dayOfMonth = momentDay.date()
  const dayOfWeek = momentDay.day()
  const isWeekend = (dayOfWeek == 0) || (dayOfWeek == 6)
  const isToday = momentDay.isSame(moment(), 'day')

  const dayStyle = isToday ?
                    styles.today :
                    (isWeekend ? styles.weekend : styles.weekday)

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

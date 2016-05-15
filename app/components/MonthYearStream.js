import React, { PropTypes } from 'react'

import datesGroupedByMonthYear from './../selectors/datesGroupedByMonthYear'
import MonthYear from './MonthYear'

const styles = {
  MonthYearStream: {
    flex: '1 1 auto',
    display: 'inline-flex',
  },
}

export default function MonthYearStream ({dates}) {
  const dayCounts = datesGroupedByMonthYear(dates)

  const monthElements = Object.keys(dayCounts).map((monthYear) => {
    const dayCount = dayCounts[monthYear]
    return <MonthYear key={monthYear} value={monthYear} dayCount={dayCount}/>
  })

  return (
    <div className="MonthYearStream" style={styles.MonthYearStream}>
      {monthElements}
    </div>
  )
}

MonthYearStream.propTypes = {
  dates: PropTypes.array.isRequired
}

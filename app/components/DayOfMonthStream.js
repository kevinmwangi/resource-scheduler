import React, { PropTypes } from 'react'

import DayOfMonth from './DayOfMonth'

const styles = {
  DayOfMonthStream: {
    flex: '1 1 auto',
    display: 'inline-flex',
  },
}

export default function DayOfMonthStream ({dates}) {
  const dateComponents = dates.map((date) => {
    return <DayOfMonth key={date} date={date} />
  })

  return (
    <div className="DayOfMonthStream" style={styles.DayOfMonthStream}>
      {dateComponents}
    </div>
  )
}

DayOfMonthStream.propTypes = {
  dates: PropTypes.array.isRequired
}

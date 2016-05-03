import React, { PropTypes } from 'react'

import DayOfMonth from './DayOfMonth'

const styles = {
  DayOfMonthStream: {
    flex: '1 1 auto',
    display: 'inline-flex',
  },
}

export default function DayOfMonthStream ({days}) {
  const dateComponents = days.map((day) => {
    return <DayOfMonth key={day} day={day} />
  })

  return (
    <div className="DayOfMonthStream" style={styles.DayOfMonthStream}>
      {dateComponents}
    </div>
  )
}

DayOfMonthStream.propTypes = {
  days: PropTypes.array.isRequired
}

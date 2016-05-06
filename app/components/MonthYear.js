import React from 'react'

import dimensions from '../constants/dimensions'
import colors from '../constants/colors'

const styles = {
  MonthYear: {
    flex: 'none',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    width: dimensions.DAY_WIDTH - 2 * dimensions.BORDER_THICKNESS,
    borderColor: colors.canvasColor,
    borderStyle: 'solid',
    borderWidth: dimensions.BORDER_THICKNESS,
    background: colors.streamColor,
  },
  cell: {
    marginLeft: 10,
  }
}

export default function MonthYear(props) {
  const {
    value,
    dayCount,
  } = props

  const width = dimensions.DAY_WIDTH * dayCount
                - 2 * dimensions.BORDER_THICKNESS;

  return (
    <div className="MonthYear"
      style={Object.assign({}, styles.MonthYear, {width: width})}>
      <span style={styles.cell}>
        {value}
      </span>
    </div>
  )
}

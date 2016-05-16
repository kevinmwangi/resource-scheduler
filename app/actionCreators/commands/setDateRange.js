import moment from 'moment'
import momentRange from 'moment-range'

import actionType from '../../constants/actionTypes'
import settingDateRange from '../statuses/settingDateRange'
import setDateRangeSucceeded from '../outcomes/setDateRangeSucceeded'

import generateResourceActivityDays from '../../lib/generateResourceActivityDays'

function generatDates(startDate, endDate) {
  const range = moment.range(startDate, endDate)
  let dates = []
  range.by('days', (moment) => {
    dates.push(moment.format('YYYY-MM-DD'))
  })
  return dates
}

export default function ({startDate, endDate}) {
  return function (dispatch, getState) {
    dispatch(settingDateRange())

    const {
      activities,
      resources,
    } = getState()

    const dates = generatDates(startDate, endDate)

    // temporarily generate random data until server online
    const resourceActivityDays = generateResourceActivityDays(
      activities,
      resources,
      dates
    )

    dispatch(setDateRangeSucceeded(dates, resourceActivityDays))
  }
}

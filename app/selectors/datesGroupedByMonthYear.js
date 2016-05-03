import moment from 'moment'

export default (days) => {
  let groupedByMonthYear = {}

  days.forEach((day) => {
    const monthYear = moment(day).format('MMM-YYYY')
    let value = groupedByMonthYear[monthYear] || 0
    groupedByMonthYear[monthYear] = value + 1
  })

  return groupedByMonthYear
}

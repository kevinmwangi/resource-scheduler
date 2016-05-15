import moment from 'moment'

export default (dates) => {
  let groupedByMonthYear = {}

  dates.forEach((date) => {
    const monthYear = moment(date).format('MMM-YYYY')
    let value = groupedByMonthYear[monthYear] || 0
    groupedByMonthYear[monthYear] = value + 1
  })

  return groupedByMonthYear
}

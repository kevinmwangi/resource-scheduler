import moment from 'moment'

function generateSingleResourceActivityDay (resource_id, activity_id, idCounter, date, dateToBeWorked, dateToBeScheduled) {
  const isPast = moment(date).isBefore(moment(), 'day')
  const hours = (isPast && dateToBeWorked) ? Math.round(Math.random() * 6) : undefined

  const uid = `${date}:${resource_id}:${activity_id}`

  return {
    id: idCounter,
    resource_id,
    activity_id,
    date,
    hours,
    uid,
    scheduled: dateToBeScheduled,
  }
}

export default function generateResourceActivityDays (resources, activities, dates) {
  let lookup = {}
  let idCounter = 0

  resources.ids.forEach((resource_id) => {
    activities.ids.forEach((activity_id) => {
      const streamToBeScheduled = Math.random() > 0.5

      if (streamToBeScheduled) {
        dates.forEach((date) => {
          const dayOfWeek = moment(date).day()
          const isWeekday = dayOfWeek > 0 && dayOfWeek < 6
          const dateToBeScheduledOrWorked = Math.random() > 0.2 && isWeekday

          if (dateToBeScheduledOrWorked) {
            idCounter++
            const dateToBeWorked = Math.random() > 0.1
            const dateToBeScheduled = Math.random() > 0.1 && isWeekday
            const scheduledDay = generateSingleResourceActivityDay(
              resource_id, activity_id, idCounter, date, dateToBeWorked, dateToBeScheduled
            )

            lookup[scheduledDay.uid] = scheduledDay
          }
        })
      }
    })
  })

  return {
    lookup,
  }
}

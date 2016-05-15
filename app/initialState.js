import moment from 'moment'

const activities = {
  ids: [1,2,3,4],
  lookup: {
    1: {id: 1, name: 'Project 1'},
    2: {id: 2, name: 'Project 2'},
    3: {id: 3, name: 'Project 3'},
    4: {id: 4, name: 'Admin'},
  }
}

const resources = {
  ids: [1,2,3,4,5],
  lookup: {
    1: {id: 1, name: 'neil'},
    2: {id: 2, name: 'room1'},
    3: {id: 3, name: 'hannah'},
    4: {id: 4, name: 'james'},
    5: {id: 5, name: 'ben'},
  }
}

const periodLength = 120
const today = moment().startOf('day')
const halfPeriod = moment.duration(periodLength / 2, 'days')
const periodStart = today.subtract(halfPeriod)

function generateDates(periodStart, periodLength) {
  let ids = []

  for(let i = 0; i < periodLength; i++) {
    ids.push(periodStart.add(1, 'day').format('YYYY-MM-DD'))
  }
  return ids
}

const dates = generateDates(periodStart, periodLength)

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

const resourceActivityDays = (function generateResourceActivityDays () {
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
})()

export default {
  resources,
  activities,
  dates,
  resourceActivityDays,
}

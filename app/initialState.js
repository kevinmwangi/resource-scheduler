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

function generateDays(periodStart, periodLength) {
  let ids = []

  for(let i = 0; i < periodLength; i++) {
    ids.push(periodStart.add(1, 'day').format('YYYY-MM-DD'))
  }
  return ids
}

const days = generateDays(periodStart, periodLength)

function generateSingleResourceActivityDay (resource_id, activity_id, idCounter, day, dayToBeWorked, dayToBeScheduled) {
  const isPast = moment(day).isBefore(moment(), 'day')
  const hours = (isPast && dayToBeWorked) ? Math.round(Math.random() * 6) : undefined

  const uid = `${day}:${resource_id}:${activity_id}`

  return {
    id: idCounter,
    resource_id,
    activity_id,
    day,
    hours,
    uid,
    scheduled: dayToBeScheduled,
  }
}

const resourceActivityDays = (function generateResourceActivityDays () {
  let uids = []
  let lookup = {}
  let idCounter = 0

  resources.ids.forEach((resource_id) => {
    activities.ids.forEach((activity_id) => {
      const streamToBeScheduled = Math.random() > 0.5

      if (streamToBeScheduled) {
        days.forEach((day) => {
          const dayOfWeek = moment(day).day()
          const isWeekday = dayOfWeek > 0 && dayOfWeek < 6
          const dayToBeScheduledOrWorked = Math.random() > 0.2 && isWeekday

          if (dayToBeScheduledOrWorked) {
            idCounter++
            const dayToBeWorked = Math.random() > 0.1
            const dayToBeScheduled = Math.random() > 0.1 && isWeekday
            const scheduledDay = generateSingleResourceActivityDay(
              resource_id, activity_id, idCounter, day, dayToBeWorked, dayToBeScheduled
            )

            uids.push(scheduledDay.uid)
            lookup[scheduledDay.uid] = scheduledDay
          }
        })
      }
    })
  })

  return {
    uids,
    lookup,
  }
})()

export default {
  resources,
  activities,
  days,
  resourceActivityDays,
}

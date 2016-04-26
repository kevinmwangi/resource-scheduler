import moment from 'moment'

const activities = {
  list: [1,2,3,4],
  lookup: {
    1: {id: 2, name: 'Project 1'},
    2: {id: 3, name: 'Project 2'},
    3: {id: 4, name: 'Project 3'},
    4: {id: 6, name: 'Admin'},
  }
}

const resources = {
  list: [1,2,3,4,5],
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
  let list = []

  for(let i = 0; i < periodLength; i++) {
    list.push(periodStart.add(1, 'day').format('YYYY-MM-DD'))
  }
  return list
}

const days = generateDays(periodStart, periodLength)

function generateSingleResourceActivityDay (resource_id, activity_id, idCounter, day) {
  const isPast = moment(day).isBefore(moment(), 'day')
  const hours = isPast ? Math.round(Math.random() * 6) : '?'

  const uid = `${day}:${resource_id}:${activity_id}`

  return {
    id: idCounter,
    resource_id,
    activity_id,
    day,
    hours,
    uid,
  }
}

function generateResourceActivityDays () {
  let list = []
  let lookup = {}
  let idCounter = 0

  resources.list.forEach((resource_id) => {
    activities.list.forEach((activity_id) => {
      const streamToBeScheduled = Math.random() > 0.5

      if (streamToBeScheduled) {
        days.forEach((day) => {
          const dayOfWeek = moment(day).day()
          const isWeekday = dayOfWeek > 0 && dayOfWeek < 6
          const dayToBeScheduled = Math.random() > 0.2 && isWeekday

          if (dayToBeScheduled) {
            idCounter++
            const scheduledDay = generateSingleResourceActivityDay(
              resource_id, activity_id, idCounter, day
            )

            list.push(scheduledDay.uid)
            lookup[scheduledDay.uid] = scheduledDay
          }
        })
      }
    })
  })

  return {
    list,
    lookup,
  }
}

export default {
  resources,
  activities,
  days,
  resourceActivityDays: generateResourceActivityDays(),
}

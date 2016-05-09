import underscore from 'underscore'
import { createSelector } from 'reselect'

const blankDay = (resource_id, activity_id, day) => {
  return {
    id: null,
    day: day,
    resource_id,
    activity_id,
    hours: undefined,
    scheduled: false,
    uid: `${day}:${resource_id}:${activity_id}`,
  }
}

const blankDaysStream = (resource_id, activity_id, days) => {
  return days.map((day) => blankDay(resource_id, activity_id, day))
}

const getResources = (state) => state.resources
const getActivities = (state) => state.activities
const getDays = (state) => state.days
const getResourceActivityDayLookup = (state) => {
  return state.resourceActivityDays.lookup
}

const getGroupedStreams = createSelector(
  [
    getResources,
    getActivities,
    getDays,
    getResourceActivityDayLookup,
  ],
  (resources, activities, days, resourceActivityDayLookup) => {
    let groupedByActivity = {}
    let groupedByResource = {}

    const resourceIds = [...resources.ids, undefined]
    const activityIds = [...activities.ids, undefined]

    resourceIds.forEach((resource_id) => {
      activityIds.forEach((activity_id) => {
        let streamDays = []
        let workedOrScheduledDays = false
        let spareStream = false

        if (resource_id && activity_id) {
          days.forEach((day) => {
            const key = `${day}:${resource_id}:${activity_id}`
            const resourceActivityDay = resourceActivityDayLookup[key]
            if (resourceActivityDay) {
              streamDays.push(resourceActivityDay)
              workedOrScheduledDays = workedOrScheduledDays || true
            } else {
              streamDays.push(blankDay(resource_id, activity_id, day))
            }
          })
        } else {
          streamDays = blankDaysStream(resource_id, activity_id, days)
          spareStream = true
        }

        if (workedOrScheduledDays || spareStream) {
          const stream = {
            streamDays,
            activity_id,
            resource_id,
            uid: `${resource_id}:${activity_id}`,
          }

          if (activity_id) {
            groupedByActivity[activity_id] = groupedByActivity[activity_id] || []
            groupedByActivity[activity_id].push(stream)
          }
          if (resource_id) {
            groupedByResource[resource_id] = groupedByResource[resource_id] || []
            groupedByResource[resource_id].push(stream)
          }
        }
      })
    })

    return {
      streamsGroupedByActivities: groupedByActivity,
      streamsGroupedByResources: groupedByResource,
    }

  }
)

export default getGroupedStreams

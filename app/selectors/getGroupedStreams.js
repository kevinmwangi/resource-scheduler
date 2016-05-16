import underscore from 'underscore'
import { createSelector } from 'reselect'

const blankDay = (resource_id, activity_id, date) => {
  return {
    id: null,
    date: date,
    resource_id,
    activity_id,
    hours: undefined,
    scheduled: false,
    uid: `${date}:${resource_id}:${activity_id}`,
  }
}

const getResources = (state) => state.resources
const getActivities = (state) => state.activities
const getDates = (state) => state.dates
const getResourceActivityDayLookup = (state) => {
  return state.resourceActivityDays.lookup
}

const getGroupedStreams = createSelector(
  [
    getResources,
    getActivities,
    getDates,
    getResourceActivityDayLookup,
  ],
  (resources, activities, dates, resourceActivityDayLookup) => {
    let groupedByActivity = {}
    let groupedByResource = {}

    resources.ids.forEach((resource_id) => {
      activities.ids.forEach((activity_id) => {
        let streamDays = []
        let hasWorkedOrScheduledDays = false
        const resource = resources.lookup[resource_id]
        const activity = activities.lookup[activity_id]

        dates.forEach((date) => {
          const key = `${date}:${resource_id}:${activity_id}`
          const resourceActivityDay = resourceActivityDayLookup[key]
          if (resourceActivityDay) {
            streamDays.push(resourceActivityDay)
            hasWorkedOrScheduledDays = hasWorkedOrScheduledDays || true
          } else {
            streamDays.push(blankDay(resource_id, activity_id, date))
          }
        })

        const baseStream = {
          streamDays,
          activity_id,
          resource_id,
          hasWorkedOrScheduledDays,
          uid: `${resource_id}:${activity_id}`,
        }

        const activityStream = Object.assign(
          {label: activity.name}, baseStream
        )

        const resourceStream = Object.assign(
          {label: resource.name}, baseStream
        )

        groupedByActivity[activity_id] = groupedByActivity[activity_id] || []
        groupedByActivity[activity_id].push(resourceStream)

        groupedByResource[resource_id] = groupedByResource[resource_id] || []
        groupedByResource[resource_id].push(activityStream)
      })
    })

    return {
      streamsGroupedByActivities: groupedByActivity,
      streamsGroupedByResources: groupedByResource,
    }

  }
)

export default getGroupedStreams

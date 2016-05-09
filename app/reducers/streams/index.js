import actionType from '../../constants/actionTypes'

function stream ({
    resource_id,
    activity_id,
    resources,
    activities,
    days,
    resourceActivityDays,
  }, includeEmpty = false) {

  const anyScheduledOrWorkedDays = () => {
    const scheduledDaysOnly = days.map((day) => {
      const uid = `${day}:${resource_id}:${activity_id}`
      return resourceActivityDays.lookup[uid]
    }).filter((slot) => {
      return typeof slot != 'undefined'
    })

    return !!scheduledDaysOnly.length
  }

  if (includeEmpty || anyScheduledOrWorkedDays()){
    const slots = days.map(function (day) {
      const uid = `${day}:${resource_id}:${activity_id}`
      const scheduledSlot = resourceActivityDays.lookup[uid]

      if (scheduledSlot) {
        return scheduledSlot
      } else {
        return {
          id: null,
          day: day,
          resource_id,
          activity_id,
          hours: undefined,
          scheduled: false,
        }
      }
    })

    return {
      uid: `${resource_id}:${activity_id}`,
      resource_id,
      activity_id,
      resourceActivityDays: slots,
    }
  }
}

function streamsFor ({
    resources,
    activities,
    days,
    resourceActivityDays,
  }) {

  let streamLookup = {}

  let groupedByResource = {}
  let groupedByActivity = {}

  resources.ids.forEach((resource_id) => {
    groupedByResource[resource_id] = []

    activities.ids.forEach((activity_id) => {
      groupedByActivity[activity_id] = groupedByActivity[activity_id] || []

      const resourceActivityStream = stream({
        resource_id,
        activity_id,
        resources,
        activities,
        days,
        resourceActivityDays,
      })

      if (resourceActivityStream) {
        groupedByResource[resource_id].push(resourceActivityStream)
        groupedByActivity[activity_id].push(resourceActivityStream)
      }

    })

    groupedByResource[resource_id].push(stream({
      resource_id,
      null,
      resources,
      activities,
      days,
      resourceActivityDays,
    }, true))
  })

  activities.ids.forEach((activity_id) => {
    groupedByActivity[activity_id].push(stream({
      null,
      activity_id,
      resources,
      activities,
      days,
      resourceActivityDays,
    }, true))
  })

  return {
    groupedByResource,
    groupedByActivity,
  }
}


// ----------------------
const initialState = {}

export default function (state = initialState, action) {

  switch (action.type) {

    case actionType.INITIAL_DATA_LOADED:
      return streamsFor(action.data)

    default:
      return state
  }
}


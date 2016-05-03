export default ({
    resource_id,
    activity_id,
    resources,
    activities,
    days,
    resourceActivityDays,
  }) => {

  const anyScheduledDays = () => {
    const scheduledDaysOnly = days.map((day) => {
      const uid = `${day}:${resource_id}:${activity_id}`
      return resourceActivityDays.lookup[uid]
    }).filter((slot) => {
      return typeof slot != 'undefined'
    })

    return !!scheduledDaysOnly.length
  }

  if (anyScheduledDays()){
    const slots = days.map(function (day) {
      const uid = `${day}:${resource_id}:${activity_id}`
      const scheduledSlot = resourceActivityDays.lookup[uid]

      if (scheduledSlot) {
        return Object.assign(scheduledSlot, {scheduled: true})
      } else {
        return {
          id: null,
          day: day,
          resource_id,
          activity_id,
          hours: 0,
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

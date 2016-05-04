import stream from './stream'

export default ({
    resources,
    activities,
    days,
    resourceActivityDays,
  }) => {

  let streamList = []

  resources.ids.forEach((resource_id) => {
    activities.ids.forEach((activity_id) => {
      const resourceActivityStream = stream({
        resource_id,
        activity_id,
        resources,
        activities,
        days,
        resourceActivityDays,
      })

      if (resourceActivityStream) {
        streamList.push(resourceActivityStream)
      }
    })
  })

  return streamList
}

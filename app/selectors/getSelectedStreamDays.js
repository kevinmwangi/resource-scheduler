import { createSelector } from 'reselect'

const getSelectedStreamDaysLookup = (state) => {
  return state.activeStream.selectedStreamDaysLookup
}

const getResourceActivityDays = (state) => {
  return state.resourceActivityDays
}

const getSelectedStreamDays = createSelector(
  [ getSelectedStreamDaysLookup, getResourceActivityDays ],
  (selectedStreamDaysLookup, resourceActivityDays) => {
    const selectedStreamDaysUids = Object.keys(selectedStreamDaysLookup)

    let selectedStreamDays = {}

    selectedStreamDaysUids.forEach((uid) => {
      if (selectedStreamDaysLookup[uid]) {
        selectedStreamDays[uid] = resourceActivityDays.lookup[uid]
      }
    })

    return selectedStreamDays
  }
)

export default getSelectedStreamDays

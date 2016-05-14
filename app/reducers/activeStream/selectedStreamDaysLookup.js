import actionType from '../../constants/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_STREAM:
    case actionType.CHANGE_ACTIVE_STREAM:
      return {} // clear any currently selected stream days

    case actionType.UPDATE_STREAM_DAY_SELECTION:
      let newState = {}
      action.data.selectedStreamDays.forEach((day) => newState[day.uid] = true)
      return newState

    case actionType.UPDATE_STREAM_DAYS_SUCCEEDED:
      return {}

    default:
      return state
  }
}

import actionType from '../../constants/actionTypes'

const initialState = {}

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.UPDATE_STREAM_DAY_SELECTION:
      let selections = {}
      action.data.selectedStreamDays.forEach((day) => {
        selections[day.uid] = day
      })
      return Object.assign({}, selections, state)

    case actionType.UPDATE_STREAM_DAYS_SUCCEEDED:
      return Object.assign({}, state, action.data.updatedStreamDays)

    default:
      return state
  }
}

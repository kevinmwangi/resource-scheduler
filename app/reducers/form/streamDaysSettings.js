import actionType from '../../constants/actionTypes'

export default function (state, action) {
  switch (action.type) {
    case actionType.UPDATE_STREAM_DAYS_SUCCEEDED:
      return undefined

    default:
      return state
  }
}

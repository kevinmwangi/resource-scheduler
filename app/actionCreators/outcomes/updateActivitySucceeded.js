import action from '../../constants/actionTypes'

export default function (activity) {
  return {
    type: action.UPDATE_ACTIVITY_SUCCEEDED,
    data: {
      activity,
    }
  }
}

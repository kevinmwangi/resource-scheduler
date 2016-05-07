import action from '../../constants/actionTypes'

export default function (activity) {
  return {
    type: action.UPDATING_ACTIVITY,
    data: {
      activity,
    }
  }
}

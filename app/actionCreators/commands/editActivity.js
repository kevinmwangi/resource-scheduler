import action from '../../constants/actionTypes'

export default function (activity) {
  return {
    type: action.EDIT_ACTIVITY,
    data: {
      activity,
    }
  }
}

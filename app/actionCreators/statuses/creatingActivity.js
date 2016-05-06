import action from '../../constants/actionTypes'

export default function (activity) {
  return {
    type: action.CREATING_ACTIVITY,
    data: {
      activity,
    }
  }
}

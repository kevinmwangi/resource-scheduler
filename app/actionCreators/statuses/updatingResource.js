import action from '../../constants/actionTypes'

export default function (resource) {
  return {
    type: action.UPDATING_ACTIVITY,
    data: {
      resource,
    }
  }
}

import action from '../../constants/actionTypes'

export default function (resource) {
  return {
    type: action.CREATING_RESOURCE,
    data: {
      resource,
    }
  }
}

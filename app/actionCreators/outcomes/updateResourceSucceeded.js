import action from '../../constants/actionTypes'

export default function (resource) {
  return {
    type: action.UPDATE_RESOURCE_SUCCEEDED,
    data: {
      resource,
    }
  }
}

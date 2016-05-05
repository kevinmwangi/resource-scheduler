import action from '../../constants/actionTypes'

export default function (resource) {
  return {
    type: action.CREATE_RESOURCE_SUCCEEDED,
  }
}

import action from '../../constants/actionTypes'

export default function (resource) {
  return {
    type: action.EDIT_RESOURCE,
    data: {
      resource,
    }
  }
}

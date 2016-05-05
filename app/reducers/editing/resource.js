import actionType from '../../constants/actionTypes'

const initialState = false

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_NEW_RESOURCE:
    case actionType.CREATE_RESOURCE_SUCCEEDED:
      return false

    case actionType.NEW_RESOURCE:
      return true

    default:
      return state
  }
}

import actionType from '../../constants/actionTypes'

const initialState = null

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_NEW_RESOURCE:
    case actionType.CREATE_RESOURCE_SUCCEEDED:
      return null

    case actionType.NEW_RESOURCE:
      return {}

    default:
      return state
  }
}

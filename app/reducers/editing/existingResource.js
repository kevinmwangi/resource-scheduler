import actionType from '../../constants/actionTypes'

const initialState = null

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_EDIT_RESOURCE:
    case actionType.UPDATE_RESOURCE_SUCCEEDED:
      return null

    case actionType.EDIT_RESOURCE:
      return action.data.resource

    default:
      return state
  }
}

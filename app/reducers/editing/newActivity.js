import actionType from '../../constants/actionTypes'

const initialState = null

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_NEW_ACTIVITY:
    case actionType.CREATE_ACTIVITY_SUCCEEDED:
      return null

    case actionType.NEW_ACTIVITY:
      return {}

    default:
      return state
  }
}

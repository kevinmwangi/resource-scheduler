import actionType from '../../constants/actionTypes'

const initialState = false

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_NEW_ACTIVITY:
    case actionType.CREATE_ACTIVITY_SUCCEEDED:
      return false

    case actionType.NEW_ACTIVITY:
      return true


    default:
      return state
  }
}

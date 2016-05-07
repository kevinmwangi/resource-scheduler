import actionType from '../../constants/actionTypes'

const initialState = null

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_EDIT_ACTIVITY:
    case actionType.UPDATE_ACTIVITY_SUCCEEDED:
      return null

    case actionType.EDIT_ACTIVITY:
      return action.data.activity

    default:
      return state
  }
}

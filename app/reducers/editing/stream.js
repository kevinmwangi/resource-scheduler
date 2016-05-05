import actionType from '../../constants/actionTypes'

const initialState = false

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_NEW_STREAM:
    case actionType.CREATE_STREAM_SUCCEEDED:
      return false

    case actionType.NEW_STREAM:
      return true

    default:
      return state
  }
}

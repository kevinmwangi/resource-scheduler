import actionType from '../../constants/actionTypes'

const initialState = false

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_ACTIVE_STREAM:
      return false

    default:
      return state
  }
}

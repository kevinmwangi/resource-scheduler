import actionType from '../../constants/actionTypes'

const initialState = null

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_ACTIVE_STREAM:
      return (action.data.uid == state) ? null : action.data.uid

    default:
      return state
  }
}

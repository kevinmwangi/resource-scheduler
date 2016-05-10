import actionType from '../../constants/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionType.CHANGE_ACTIVE_STREAM:
      return {} // clear any currently selected stream days

    default:
      return state
  }
}

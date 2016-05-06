import actionType from '../../constants/actionTypes'

const initialState = []

export default function (state = initialState, action) {

  switch(action.type) {
    case actionType.CREATE_ACTIVITY_SUCCEEDED:
      return [...state, action.data.activity.id]

    default:
      return state
  }
}

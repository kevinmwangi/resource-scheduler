import actionType from '../../constants/actionTypes'

const initialState = []

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.SET_DATE_RANGE_SUCCEEDED:
      return [...action.data.dates]

    default:
      return state
  }
}

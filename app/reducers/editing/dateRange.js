import actionType from '../../constants/actionTypes'

const initialState = null

export default function (state = initialState, action) {

  switch(action.type) {

    case actionType.CANCEL_EDIT_DATE_RANGE:
    case actionType.SET_DATE_RANGE_SUCCEEDED:
      return null

    case actionType.EDIT_DATE_RANGE:
      return {
        startDate: new Date(action.data.startDate),
        endDate: new Date(action.data.endDate),
      }

    default:
      return state
  }
}

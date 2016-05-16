import action from '../../constants/actionTypes'

export default function (startDate, endDate) {
  return {
    type: action.EDIT_DATE_RANGE,
    data: {
      startDate,
      endDate,
    }
  }
}

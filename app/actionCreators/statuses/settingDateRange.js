import action from '../../constants/actionTypes'

export default function (startDate, endDate) {
  return {
    type: action.SETTING_DATE_RANGE,
    data: {
      startDate,
      endDate,
    }
  }
}

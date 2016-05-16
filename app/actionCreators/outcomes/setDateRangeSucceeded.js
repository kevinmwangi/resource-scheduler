import action from '../../constants/actionTypes'

export default function (dates, resourceActivityDays) {
  return {
    type: action.SET_DATE_RANGE_SUCCEEDED,
    data: {
      dates,
      resourceActivityDays,
    }
  }
}

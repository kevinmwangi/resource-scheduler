import action from '../../constants/actionTypes'

export default function (streamDays) {
  return {
    type: action.UPDATE_STREAM_DAYS_SUCCEEDED,
    data: {
      streamDays,
    }
  }
}

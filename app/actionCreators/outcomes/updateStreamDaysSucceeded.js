import action from '../../constants/actionTypes'

export default function (updatedStreamDays) {
  return {
    type: action.UPDATE_STREAM_DAYS_SUCCEEDED,
    data: {
      updatedStreamDays,
    }
  }
}

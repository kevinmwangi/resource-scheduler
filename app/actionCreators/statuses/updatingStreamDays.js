import action from '../../constants/actionTypes'

export default function (streamDays) {
  return {
    type: action.UPDATING_STREAM_DAYS,
    data: {
      streamDays,
    }
  }
}

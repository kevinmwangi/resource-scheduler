import actionType from '../../constants/actionTypes'

export default function (selectedStreamDays) {
  return {
    type: actionType.UPDATE_STREAM_DAY_SELECTION,
    data: {
      selectedStreamDays,
    }
  }
}

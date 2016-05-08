import actionType from '../../constants/actionTypes'

export default function (uid) {
  return {
    type: actionType.CHANGE_ACTIVE_STREAM,
    data: {
      uid,
    }
  }
}

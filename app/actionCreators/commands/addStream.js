import actionType from '../../constants/actionTypes'

export default function (uid) {
  return {
    type: actionType.ADD_STREAM,
    data: {
      uid,
    }
  }
}

import action from '../../constants/actionTypes'

export default function (stream) {
  return {
    type: action.CREATING_STREAM,
    data: {
      stream,
    }
  }
}

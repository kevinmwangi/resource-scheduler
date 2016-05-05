import action from '../../constants/actionTypes'

export default function (stream) {
  return {
    type: action.CREATE_STREAM_SUCCEEDED,
  }
}

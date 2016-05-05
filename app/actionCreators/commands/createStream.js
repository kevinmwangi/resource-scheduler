import action from '../../constants/actionTypes'
import createStreamSucceeded from '../statuses/createStreamSucceeded'

export default function (name) {
  return function (dispatch) {
    dispatch({
    type: action.CREATE_STREAM,
    data: {
      stream: {}
    }
  })

    dispatch(createStreamSucceeded())
  }
}

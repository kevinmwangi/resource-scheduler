import action from '../../constants/actionTypes'
import createStreamSucceeded from '../outcomes/createStreamSucceeded'
import creatingStream from '../statuses/creatingStream'

export default function (stream) {
  return function (dispatch) {
    dispatch(creatingStream(stream))
    dispatch(createStreamSucceeded(stream))
  }
}

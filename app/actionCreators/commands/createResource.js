import action from '../../constants/actionTypes'
import createResourceSucceeded from '../statuses/createResourceSucceeded'

export default function (name) {
  return function (dispatch) {
    dispatch({
    type: action.CREATE_RESOURCE,
    data: {
      resource: {
        name: name,
      }
    }
  })

    dispatch(createResourceSucceeded())
  }
}

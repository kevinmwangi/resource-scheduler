import action from '../../constants/actionTypes'
import createActivitySucceeded from '../statuses/createActivitySucceeded'

export default function () {
  return function (dispatch) {
    dispatch({
    type: action.CREATE_ACTIVITY,
    data: {
      activity: {}
    }
  })

    dispatch(createActivitySucceeded())
  }
}

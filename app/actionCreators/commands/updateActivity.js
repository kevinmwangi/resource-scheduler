import action from '../../constants/actionTypes'
import updateActivitySucceeded from '../outcomes/updateActivitySucceeded'
import updatingActivity from '../statuses/updatingActivity'

export default function (activity, more) {

  return function (dispatch, getState) {
    dispatch(updatingActivity(activity))
    dispatch(updateActivitySucceeded(activity))
  }
}

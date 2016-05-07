import action from '../../constants/actionTypes'
import updateResourceSucceeded from '../outcomes/updateResourceSucceeded'
import updatingResource from '../statuses/updatingResource'

export default function (resource) {

  return function (dispatch, getState) {
    dispatch(updatingResource(resource))
    dispatch(updateResourceSucceeded(resource))
  }
}

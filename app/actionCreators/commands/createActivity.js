import action from '../../constants/actionTypes'
import createActivitySucceeded from '../outcomes/createActivitySucceeded'
import creatingActivity from '../statuses/creatingActivity'

export default function (activity, more) {

  return function (dispatch, getState) {
    dispatch(creatingActivity(activity))

    // Temporarily generate ids until database added
    const { activities } = getState()
    const pseudoId = Math.max(...activities.ids) + 1
    const activityWithId = Object.assign({}, activity, {id: pseudoId})

    dispatch(createActivitySucceeded(activityWithId))
  }
}

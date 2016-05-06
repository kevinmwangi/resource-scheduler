import action from '../../constants/actionTypes'
import createResourceSucceeded from '../outcomes/createResourceSucceeded'
import creatingResource from '../statuses/creatingResource'

export default function (resource) {

  return function (dispatch, getState) {
    dispatch(creatingResource(resource))

    // Temporarily generate ids until database added
    const { resources } = getState()
    const pseudoId = Math.max(...resources.ids) + 1
    const resourceWithId = Object.assign({}, resource, {id: pseudoId})

    dispatch(createResourceSucceeded(resourceWithId))
  }
}

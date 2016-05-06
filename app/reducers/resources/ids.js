import actionType from '../../constants/actionTypes'

const initialState = []

export default function (state = initialState, action) {

  switch(action.type) {
    case actionType.CREATE_RESOURCE_SUCCEEDED:
      return [...state, action.data.resource.id]

    default:
      return state
  }
}

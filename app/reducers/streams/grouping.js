import actionType from '../../constants/actionTypes'

const initialState = 'resource_id'

export default function (state = initialState, action) {
  switch (action.type) {

    case actionType.REGROUP_STREAMS:
      return action.data.groupBy

    default:
      return state
  }
}

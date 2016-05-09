import actionType from '../../constants/actionTypes'

const initialState = {
  uid: undefined
}

export default function (state = initialState, action) {
  switch(action.type) {
    case actionType.CHANGE_ACTIVE_STREAM:
      const actionUid = action.data.uid
      const currentUid = state.uid
      return {
        uid: (actionUid == currentUid) ? undefined : actionUid
      }

    default:
      return state
  }
}

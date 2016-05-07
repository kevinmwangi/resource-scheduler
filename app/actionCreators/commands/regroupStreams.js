import actionType from '../../constants/actionTypes'

export default function (groupBy) {
  return {
    type: actionType.REGROUP_STREAMS,
    data: {
      groupBy,
    }
  }
}

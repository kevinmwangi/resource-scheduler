import actionType from '../../constants/actionTypes'

export default function () {
  return (dispatch, getState) => {
    const {
      resources,
      activities,
      days,
      resourceActivityDays,
    } = getState();

    dispatch({
      type: actionType.INITIAL_DATA_LOADED,
      data: {
        resources,
        activities,
        days,
        resourceActivityDays,
      }
    })
  }
}

import actionType from '../../constants/actionTypes'
import updateStreamDaysSucceeded from '../outcomes/updateStreamDaysSucceeded'
import updatingStreamDays from '../statuses/updatingStreamDays'

export default function () {
  return function (dispatch, getState) {
    const { selectedStreamDays } = getState()

    dispatch(updatingStreamDays(selectedStreamDays))
    dispatch(updateStreamDaysSucceeded(selectedStreamDays))
  }
}

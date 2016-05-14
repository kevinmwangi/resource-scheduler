import actionType from '../../constants/actionTypes'
import updateStreamDaysSucceeded from '../outcomes/updateStreamDaysSucceeded'
import updatingStreamDays from '../statuses/updatingStreamDays'
import getSelectedStreamDays from '../../selectors/getSelectedStreamDays'

const processedForm = (settings) => {
  const processedForm = Object.assign({}, settings)

  if (typeof processedForm.hours == 'undefined') {
    delete processedForm.hours
  } else if (processedForm.hours == '' || processedForm.hours == null) {
    delete processedForm.hours
  } else if (isNaN(Number(processedForm.hours))) {
    processedForm.hours = ''
  } else {
    processedForm.hours = Number(processedForm.hours)
  }

  if (typeof processedForm.scheduled == 'undefined') {
    delete processedForm.scheduled
  } else {
    processedForm.scheduled = processedForm.scheduled == "true"
  }

  return processedForm
}

export default function (settings) {
  const newSettings = processedForm(settings)

  return function (dispatch, getState) {
    dispatch(updatingStreamDays(selectedStreamDays))

    const selectedStreamDays = getSelectedStreamDays(getState())
    const selectedStreamDaysUids = Object.keys(selectedStreamDays)

    let updatedStreamDays = {}
    selectedStreamDaysUids.forEach((uid) => {
      const streamDay = selectedStreamDays[uid]

      updatedStreamDays[uid] = Object.assign({}, streamDay, newSettings)
    })

    dispatch(updateStreamDaysSucceeded(updatedStreamDays))
  }
}

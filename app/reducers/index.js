import { combineReducers } from 'redux'

import activeStream from './activeStream'
import activities from './activities'
import dates from './dates'
import resources from './resources'
import resourceActivityDays from './resourceActivityDays'
import form from './form'
import editing from './editing'
import streamGrouping from './streamGrouping'

export default combineReducers({
  activeStream,
  activities,
  dates,
  editing,
  form,
  resourceActivityDays,
  resources,
  streamGrouping,
})

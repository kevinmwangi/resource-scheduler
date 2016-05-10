import { combineReducers } from 'redux'

import activeStream from './activeStream'
import activities from './activities'
import days from './days'
import resources from './resources'
import resourceActivityDays from './resourceActivityDays'
import form from './form'
import editing from './editing'
import streamGrouping from './streamGrouping'

export default combineReducers({
  activeStream,
  activities,
  days,
  editing,
  form,
  resourceActivityDays,
  resources,
  streamGrouping,
})

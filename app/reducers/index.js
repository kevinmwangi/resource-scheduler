import { combineReducers } from 'redux'

import activities from './activities'
import days from './days'
import resources from './resources'
import resourceActivityDays from './resourceActivityDays'
import form from './form'
import editing from './editing'

export default combineReducers({
  activities,
  days,
  resources,
  resourceActivityDays,
  form,
  editing,
})

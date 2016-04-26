import { combineReducers } from 'redux'

import activities from './activities'
import days from './days'
import resources from './resources'
import resourceActivityDays from './resourceActivityDays'

export default combineReducers({
  activities,
  days,
  resources,
  resourceActivityDays,
})

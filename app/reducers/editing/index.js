import { combineReducers } from 'redux'

import existingResource from './existingResource'
import newResource from './newResource'
import existingActivity from './existingActivity'
import newActivity from './newActivity'
import dateRange from './dateRange'

export default combineReducers({
  existingResource,
  newResource,
  existingActivity,
  newActivity,
  dateRange,
})

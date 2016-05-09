import { combineReducers } from 'redux'

import active from './active'
import grouping from './grouping'

export default combineReducers({
  active,
  grouping,
})

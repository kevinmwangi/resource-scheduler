import { combineReducers } from 'redux'

import resource from './resource'
import activity from './activity'
import stream from './stream'

export default combineReducers({
  resource,
  activity,
  stream,
})

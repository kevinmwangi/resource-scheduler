import { combineReducers } from 'redux'

import lookup from './lookup'
import uids from './uids'

export default combineReducers({
  lookup,
  uids,
})

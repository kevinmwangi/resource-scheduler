import { combineReducers } from 'redux'

import selectedStreamDaysLookup from './selectedStreamDaysLookup'
import uid from './uid'

export default combineReducers({
  selectedStreamDaysLookup,
  uid,
})

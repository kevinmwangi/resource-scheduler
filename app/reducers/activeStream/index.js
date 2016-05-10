import { combineReducers } from 'redux'

import selectedStreamDaysLookup from './selectedStreamDaysLookup'
import selectionModeOn from './selectionModeOn'
import uid from './uid'

export default combineReducers({
  selectedStreamDaysLookup,
  selectionModeOn,
  uid,
})

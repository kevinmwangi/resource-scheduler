import actionType from '../../../app/constants/actionTypes'

import selectedStreamDaysLookup from '../../../app/reducers/activeStream/selectedStreamDaysLookup'

describe('reducer: selectedStreamDaysLookup', function() {
  describe('initial state', function() {
    it('returns empty object', function() {
      const state = undefined
      const action = {}
      expect(selectedStreamDaysLookup(state, action)).toEqual({})
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = {'3:4': true}
      const action = {}
      expect(selectedStreamDaysLookup(state, action)).toBe(state)
    })
  })

  describe(actionType.CHANGE_ACTIVE_STREAM, function() {
    it('clears the selection', function() {
      const state = {'3:4': true}
      const action = {
        type: actionType.CHANGE_ACTIVE_STREAM,
      }
      expect(selectedStreamDaysLookup(state, action)).toEqual({})
    })
  })
})

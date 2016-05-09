import actionType from '../../../app/constants/actionTypes'

import uids from '../../../app/reducers/resourceActivityDays/uids'

describe('reducer: resourceActivityDays.uids', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(uids(state, action)).toEqual([])
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = []
      const action = {}
      expect(uids(state, action)).toBe(state)
    })
  })
})

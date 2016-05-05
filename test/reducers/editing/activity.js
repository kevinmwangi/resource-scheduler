import actionType from '../../../app/constants/actionTypes'

import activity from '../../../app/reducers/editing/activity'

describe('reducer: editing.activity', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(activity(state, action)).toEqual(false)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(activity(state, action)).toBe(state)
    })
  })


  describe(actionType.NEW_ACTIVITY, function() {
    it('returns true', function() {
      const state = 'starting value'
      const action = {
        type: actionType.NEW_ACTIVITY
      }
      expect(activity(state, action)).toEqual(true)
    })
  })

  describe(actionType.CANCEL_NEW_ACTIVITY, function() {
    it('returns false', function() {
      const state = 'starting value'
      const action = {
        type: actionType.CANCEL_NEW_ACTIVITY
      }
      expect(activity(state, action)).toEqual(false)
    })
  })

  describe(actionType.CREATE_ACTIVITY_SUCCEEDED, function() {
    it('returns false', function() {
      const state = 'starting value'
      const action = {
        type: actionType.CANCEL_NEW_ACTIVITY
      }
      expect(activity(state, action)).toEqual(false)
    })
  })
})

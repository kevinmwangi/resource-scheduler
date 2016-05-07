import actionType from '../../../app/constants/actionTypes'

import newActivity from '../../../app/reducers/editing/newActivity'

describe('reducer: editing.newActivity', function() {
  describe('initial state', function() {
    it('is null', function() {
      const state = undefined
      const action = {}
      expect(newActivity(state, action)).toEqual(null)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(newActivity(state, action)).toBe(state)
    })
  })


  describe(actionType.NEW_ACTIVITY, function() {
    it('returns an empty activity', function() {
      const state = null
      const action = {
        type: actionType.NEW_ACTIVITY
      }
      expect(newActivity(state, action)).toEqual({})
    })
  })

  describe(actionType.CANCEL_NEW_ACTIVITY, function() {
    it('returns null', function() {
      const state = {}
      const action = {
        type: actionType.CANCEL_NEW_ACTIVITY
      }
      expect(newActivity(state, action)).toEqual(null)
    })
  })

  describe(actionType.CREATE_ACTIVITY_SUCCEEDED, function() {
    it('returns null', function() {
      const state = {}
      const action = {
        type: actionType.CREATE_ACTIVITY_SUCCEEDED,
      }
      expect(newActivity(state, action)).toEqual(null)
    })
  })

})

import actionType from '../../../app/constants/actionTypes'

import resource from '../../../app/reducers/editing/resource'

describe('reducer: editing.resource', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(resource(state, action)).toEqual(false)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(resource(state, action)).toBe(state)
    })
  })

  describe(actionType.NEW_RESOURCE, function() {
    it('returns true', function() {
      const state = 'starting value'
      const action = {
        type: actionType.NEW_RESOURCE
      }
      expect(resource(state, action)).toEqual(true)
    })
  })

  describe(actionType.CANCEL_NEW_RESOURCE, function() {
    it('returns false', function() {
      const state = 'starting value'
      const action = {
        type: actionType.CANCEL_NEW_RESOURCE
      }
      expect(resource(state, action)).toEqual(false)
    })
  })

  describe(actionType.CREATE_RESOURCE_SUCCEEDED, function() {
    it('returns false', function() {
      const state = 'starting value'
      const action = {
        type: actionType.CANCEL_NEW_RESOURCE
      }
      expect(resource(state, action)).toEqual(false)
    })
  })

})

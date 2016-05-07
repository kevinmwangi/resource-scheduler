import actionType from '../../../app/constants/actionTypes'

import newResource from '../../../app/reducers/editing/newResource'

describe('reducer: editing.newResource', function() {
  describe('initial state', function() {
    it('is null', function() {
      const state = undefined
      const action = {}
      expect(newResource(state, action)).toEqual(null)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(newResource(state, action)).toBe(state)
    })
  })


  describe(actionType.NEW_RESOURCE, function() {
    it('returns an empty resource', function() {
      const state = 'starting value'
      const action = {
        type: actionType.NEW_RESOURCE
      }
      expect(newResource(state, action)).toEqual({})
    })
  })

  describe(actionType.CANCEL_NEW_RESOURCE, function() {
    it('returns null', function() {
      const state = {}
      const action = {
        type: actionType.CANCEL_NEW_RESOURCE
      }
      expect(newResource(state, action)).toEqual(null)
    })
  })

  describe(actionType.CREATE_RESOURCE_SUCCEEDED, function() {
    it('returns null', function() {
      const state = {}
      const action = {
        type: actionType.CREATE_RESOURCE_SUCCEEDED
      }
      expect(newResource(state, action)).toEqual(null)
    })
  })
})

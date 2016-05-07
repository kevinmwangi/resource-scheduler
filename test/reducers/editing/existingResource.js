import actionType from '../../../app/constants/actionTypes'

import existingResource from '../../../app/reducers/editing/existingResource'

describe('reducer: editing.existingResource', function() {
  describe('initial state', function() {
    it('is null', function() {
      const state = undefined
      const action = {}
      expect(existingResource(state, action)).toEqual(null)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(existingResource(state, action)).toBe(state)
    })
  })


  describe(actionType.EDIT_RESOURCE, function() {
    it('returns the resource being edited', function() {
      const state = null
      const action = {
        type: actionType.EDIT_RESOURCE,
        data: {
          resource: {id: 4, name: 'room1'}
        }
      }
      expect(existingResource(state, action)).toEqual({id: 4, name: 'room1'})
    })
  })

  describe(actionType.CANCEL_EDIT_RESOURCE, function() {
    it('returns null', function() {
      const state = {id: 4, name: 'room1'}
      const action = {
        type: actionType.CANCEL_EDIT_RESOURCE
      }
      expect(existingResource(state, action)).toEqual(null)
    })
  })

  describe(actionType.UPDATE_RESOURCE_SUCCEEDED, function() {
    it('returns null', function() {
      const state = {id: 4, name: 'room1'}
      const action = {
        type: actionType.UPDATE_RESOURCE_SUCCEEDED
      }
      expect(existingResource(state, action)).toEqual(null)
    })
  })
})

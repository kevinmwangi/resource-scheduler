import actionType from '../../../app/constants/actionTypes'

import lookup from '../../../app/reducers/resources/lookup'

describe('reducer: resources.lookup', function() {
  describe('initial state', function() {
    it('is an empty object', function() {
      const state = undefined
      const action = {}
      expect(lookup(state, action)).toEqual({})
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = {}
      const action = {}
      expect(lookup(state, action)).toBe(state)
    })
  })

  describe(actionType.CREATE_RESOURCE_SUCCEEDED, function() {
    it('indexes the new resource', function() {
      const state = {}
      const action = {
        type: actionType.CREATE_RESOURCE_SUCCEEDED,
        data: {
          resource: {id: 4, name: 'trouble'}
        },
      }
      expect(lookup(state, action)).toEqual({
        '4': {id: 4, name: 'trouble'}
      })
    })
  })

  describe(actionType.UPDATE_RESOURCE_SUCCEEDED, function() {
    it('updates the resource', function() {
      const state = {
        '3': {id: 4, name: 'bill'},
        '4': {id: 4, name: 'michael'},
        '5': {id: 4, name: 'jeff'},
      }
      const action = {
        type: actionType.UPDATE_RESOURCE_SUCCEEDED,
        data: {
          resource: {id: 4, name: 'jacko'}
        },
      }
      expect(lookup(state, action)).toEqual({
        '3': {id: 4, name: 'bill'},
        '4': {id: 4, name: 'jacko'},
        '5': {id: 4, name: 'jeff'},
      })
    })
  })

})

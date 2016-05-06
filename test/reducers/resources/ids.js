import actionType from '../../../app/constants/actionTypes'

import ids from '../../../app/reducers/resources/ids'

describe('reducer: resources.ids', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(ids(state, action)).toEqual([])
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = []
      const action = {}
      expect(ids(state, action)).toBe(state)
    })
  })

  describe(actionType.CREATE_RESOURCE_SUCCEEDED, function() {
    it('adds the new resource id', function() {
      const state = [1,2]
      const action = {
        type: actionType.CREATE_RESOURCE_SUCCEEDED,
        data: {
          resource: {id: 4, name: 'trouble'}
        }
      }
      expect(ids(state, action)).toEqual([1,2,4])
    })
  })

})

import actionType from '../../../app/constants/actionTypes'

import ids from '../../../app/reducers/activities/ids'

describe('reducer: activities.ids', function() {
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

  describe(actionType.CREATE_ACTIVITY_SUCCEEDED, function() {
    it('adds the new activity id', function() {
      const state = [1,2]
      const action = {
        type: actionType.CREATE_ACTIVITY_SUCCEEDED,
        data: {
          activity: {id: 4, name: 'fun'}
        }
      }
      expect(ids(state, action)).toEqual([1,2,4])
    })
  })

})

import actionType from '../../../app/constants/actionTypes'

import lookup from '../../../app/reducers/activities/lookup'

describe('reducer: activities.lookup', function() {
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

  describe(actionType.CREATE_ACTIVITY_SUCCEEDED, function() {
    it('indexes the new activity', function() {
      const state = {}
      const action = {
        type: actionType.CREATE_ACTIVITY_SUCCEEDED,
        data: {
          activity: {id: 4, name: 'fun'}
        },
      }
      expect(lookup(state, action)).toEqual({
        '4': {id: 4, name: 'fun'}
      })
    })
  })

  describe(actionType.UPDATE_ACTIVITY_SUCCEEDED, function() {
    it('indexes the new activity', function() {
      const state = {
        '3': {id: 4, name: 'holiday'},
        '4': {id: 4, name: 'fun'},
        '5': {id: 5, name: 'sick'},
      }
      const action = {
        type: actionType.UPDATE_ACTIVITY_SUCCEEDED,
        data: {
          activity: {id: 4, name: 'boredom'}
        },
      }
      expect(lookup(state, action)).toEqual({
        '3': {id: 4, name: 'holiday'},
        '4': {id: 4, name: 'boredom'},
        '5': {id: 5, name: 'sick'},
      })
    })
  })

})

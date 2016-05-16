import actionType from '../../../app/constants/actionTypes'

import ids from '../../../app/reducers/dates'

describe('reducer: dates', function() {
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

  describe(actionType.SET_DATE_RANGE_SUCCEEDED, function() {
    it('returns the given state', function() {
      const state = []
      const action = {
        type: actionType.SET_DATE_RANGE_SUCCEEDED,
        data: {
          dates: ['2016-05-01', '2016-05-03', '2016-06-04'],
          resourceActivityDays: {}
        }
      }
      expect(ids(state, action)).toEqual([
        '2016-05-01', '2016-05-03', '2016-06-04'
      ])
    })
  })
})

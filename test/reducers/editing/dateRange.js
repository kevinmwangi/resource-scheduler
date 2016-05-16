import actionType from '../../../app/constants/actionTypes'

import dateRange from '../../../app/reducers/editing/dateRange'

describe('reducer: editing.dateRange', function() {
  describe('initial state', function() {
    it('is null', function() {
      const state = undefined
      const action = {}
      expect(dateRange(state, action)).toEqual(null)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = {startDate: '2016-01-02', endDate: '2016-03-04'}
      const action = {}
      expect(dateRange(state, action)).toBe(state)
    })
  })


  describe(actionType.EDIT_DATE_RANGE, function() {
    it('returns the date range being edited', function() {
      const state = null
      const action = {
        type: actionType.EDIT_DATE_RANGE,
        data: {
          startDate: '2016-01-02',
          endDate: '2016-03-04',
        }
      }
      expect(dateRange(state, action)).toEqual({
        startDate: new Date('2016-01-02'),
        endDate: new Date('2016-03-04'),
      })
    })
  })

  describe(actionType.CANCEL_EDIT_DATE_RANGE, function() {
    it('returns null', function() {
      const state = {
        startDate: new Date('2016-01-02'),
        endDate: new Date('2016-03-04'),
      }

      const action = {
        type: actionType.CANCEL_EDIT_DATE_RANGE
      }
      expect(dateRange(state, action)).toEqual(null)
    })
  })

  describe(actionType.SET_DATE_RANGE_SUCCEEDED, function() {
    it('returns null', function() {
      const state = {
        startDate: new Date('2016-01-02'),
        endDate: new Date('2016-03-04'),
      }

      const action = {
        type: actionType.SET_DATE_RANGE_SUCCEEDED,
      }
      expect(dateRange(state, action)).toEqual(null)
    })
  })
})

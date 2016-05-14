import actionType from '../../../app/constants/actionTypes'

import selectedStreamDaysLookup from '../../../app/reducers/activeStream/selectedStreamDaysLookup'

describe('reducer: selectedStreamDaysLookup', function() {
  describe('initial state', function() {
    it('returns empty object', function() {
      const state = undefined
      const action = {}
      expect(selectedStreamDaysLookup(state, action)).toEqual({})
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = {'2016-04-04:3:4': true}
      const action = {}
      expect(selectedStreamDaysLookup(state, action)).toBe(state)
    })
  })

  describe(actionType.CHANGE_ACTIVE_STREAM, function() {
    it('clears the selection', function() {
      const state = {'2016-04-04:3:4': true}
      const action = {
        type: actionType.CHANGE_ACTIVE_STREAM,
      }
      expect(selectedStreamDaysLookup(state, action)).toEqual({})
    })
  })

  describe(actionType.ADD_STREAM, function() {
    it('clears the selection', function() {
      const state = {'2016-04-04:3:4': true}
      const action = {
        type: actionType.ADD_STREAM,
      }
      expect(selectedStreamDaysLookup(state, action)).toEqual({})
    })
  })

  describe(actionType.UPDATE_STREAM_DAYS_SUCCEEDED, function() {
    it('clears the selection', function() {
      const state = {'2016-04-04:3:4': true}
      const action = {
        type: actionType.UPDATE_STREAM_DAYS_SUCCEEDED,
      }
      expect(selectedStreamDaysLookup(state, action)).toEqual({})
    })
  })

  describe(actionType.UPDATE_STREAM_DAY_SELECTION, function() {
    it('returns the given selections', function() {
      const state = {
        '2016-04-04:1:2': true,
        '2016-04-04:2:3': true,
      }
      const action = {
        type: actionType.UPDATE_STREAM_DAY_SELECTION,
        data: {
          selectedStreamDays: [
            {uid: '2016-04-04:3:4'},
            {uid: '2016-04-04:1:2'},
          ]
        }
      }
      expect(selectedStreamDaysLookup(state, action)).toEqual({
        '2016-04-04:3:4': true,
        '2016-04-04:1:2': true,
      })
    })
  })
})

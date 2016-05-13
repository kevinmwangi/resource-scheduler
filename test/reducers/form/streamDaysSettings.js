import actionType from '../../../app/constants/actionTypes'

import streamDaysSettings from '../../../app/reducers/form/streamDaysSettings'

describe('reducer: form.streamDaysSettings', function() {
  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = 'whatever'
      const action = {}
      expect(streamDaysSettings(state, action)).toBe(state)
    })
  })

  describe(actionType.UPDATE_STREAM_DAYS_SUCCEEDED, function () {
    it('blows away the data, returning undefined', function () {
      const state = 'whatever'
      const action = {
        type: actionType.UPDATE_STREAM_DAYS_SUCCEEDED
      }
      expect(streamDaysSettings(state, action)).toBe(undefined)
    })
  })
})

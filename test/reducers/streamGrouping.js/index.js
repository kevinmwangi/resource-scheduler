import actionType from '../../../app/constants/actionTypes'

import streamGrouping from '../../../app/reducers/streamGrouping'

describe('reducer: streamGrouping', function() {
  describe('initial state', function() {
    it('is resource', function() {
      const state = undefined
      const action = {}
      expect(streamGrouping(state, action)).toEqual('resource_id')
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = 'something'
      const action = {}
      expect(streamGrouping(state, action)).toBe(state)
    })
  })

  describe(actionType.REGROUP_STREAMS, function() {
    it('returns an empty resource', function() {
      const state = 'starting value'
      const action = {
        type: actionType.REGROUP_STREAMS,
        data: {
          groupBy: 'activity_id',
        }
      }
      expect(streamGrouping(state, action)).toEqual('activity_id')
    })
  })
})

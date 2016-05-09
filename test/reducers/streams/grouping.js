import actionType from '../../../app/constants/actionTypes'

import grouping from '../../../app/reducers/streams/grouping'

describe('reducer: grouping', function() {
  describe('initial state', function() {
    it('is resource', function() {
      const state = undefined
      const action = {}
      expect(grouping(state, action)).toEqual('resource_id')
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = 'something'
      const action = {}
      expect(grouping(state, action)).toBe(state)
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
      expect(grouping(state, action)).toEqual('activity_id')
    })
  })
})

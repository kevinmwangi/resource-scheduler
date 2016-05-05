import actionType from '../../../app/constants/actionTypes'

import stream from '../../../app/reducers/editing/stream'

describe('reducer: editing.stream', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(stream(state, action)).toEqual(false)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(stream(state, action)).toBe(state)
    })
  })

  describe(actionType.NEW_STREAM, function() {
    it('returns true', function() {
      const state = 'starting value'
      const action = {
        type: actionType.NEW_STREAM
      }
      expect(stream(state, action)).toEqual(true)
    })
  })

  describe(actionType.CANCEL_NEW_STREAM, function() {
    it('returns false', function() {
      const state = 'starting value'
      const action = {
        type: actionType.CANCEL_NEW_STREAM
      }
      expect(stream(state, action)).toEqual(false)
    })
  })

  describe(actionType.CREATE_STREAM_SUCCEEDED, function() {
    it('returns false', function() {
      const state = 'starting value'
      const action = {
        type: actionType.CREATE_STREAM_SUCCEEDED
      }
      expect(stream(state, action)).toEqual(false)
    })
  })
})

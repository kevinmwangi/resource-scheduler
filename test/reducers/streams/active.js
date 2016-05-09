import actionType from '../../../app/constants/actionTypes'

import active from '../../../app/reducers/streams/active'

describe('reducer: active', function() {
  describe('initial state', function() {
    it('returns undefined', function() {
      const state = undefined
      const action = {}
      expect(active(state, action)).toEqual({uid: undefined})
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = 'something'
      const action = {}
      expect(active(state, action)).toBe(state)
    })
  })

  describe(actionType.CHANGE_ACTIVE_STREAM, function() {
    it('sets the uid if changed', function() {
      const state = {uid: '3:4'}
      const action = {
        type: actionType.CHANGE_ACTIVE_STREAM,
        data: {
          uid: '2:1',
        }
      }
      expect(active(state, action)).toEqual({
        uid: '2:1',
      })
    })

    it('toggles the uid to undefined if unchanged', function() {
      const state = {uid: '2:1'}
      const action = {
        type: actionType.CHANGE_ACTIVE_STREAM,
        data: {
          uid: '2:1',
        }
      }
      expect(active(state, action)).toEqual({
        uid: undefined,
      })
    })
  })
})

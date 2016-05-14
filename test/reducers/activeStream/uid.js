import actionType from '../../../app/constants/actionTypes'

import uid from '../../../app/reducers/activeStream/uid'

describe('reducer: uid', function() {
  describe('initial state', function() {
    it('is null', function() {
      const state = undefined
      const action = {}
      expect(uid(state, action)).toEqual(null)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = 'something'
      const action = {}
      expect(uid(state, action)).toBe(state)
    })
  })

  describe(actionType.CHANGE_ACTIVE_STREAM, function() {
    it('sets the uid if changed', function() {
      const state = '3:4'
      const action = {
        type: actionType.CHANGE_ACTIVE_STREAM,
        data: {
          uid: '2:1',
        }
      }
      expect(uid(state, action)).toEqual('2:1')
    })

    it('toggles the uid to null if unchanged', function() {
      const state = '2:1'
      const action = {
        type: actionType.CHANGE_ACTIVE_STREAM,
        data: {
          uid: '2:1',
        }
      }
      expect(uid(state, action)).toEqual(null)
    })
  })

  describe(actionType.ADD_STREAM, function() {
    it('sets the uid', function() {
      const state = '3:4'
      const action = {
        type: actionType.ADD_STREAM,
        data: {
          uid: '2:1',
        }
      }
      expect(uid(state, action)).toEqual('2:1')
    })

    it('does NOT toggle the uid to null if unchanged', function() {
      const state = '2:1'
      const action = {
        type: actionType.ADD_STREAM,
        data: {
          uid: '2:1',
        }
      }
      expect(uid(state, action)).toEqual('2:1')
    })
  })
})

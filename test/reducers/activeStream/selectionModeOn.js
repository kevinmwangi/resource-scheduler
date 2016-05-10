import actionType from '../../../app/constants/actionTypes'

import selectionModeOn from '../../../app/reducers/activeStream/selectionModeOn'

describe('reducer: selectionModeOn', function() {
  describe('initial state', function() {
    it('returns false', function() {
      const state = undefined
      const action = {}
      expect(selectionModeOn(state, action)).toEqual(false)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(selectionModeOn(state, action)).toBe(state)
    })
  })

  describe(actionType.CHANGE_ACTIVE_STREAM, function() {
    it('returns false', function() {
      const state = true
      const action = {
        type: actionType.CHANGE_ACTIVE_STREAM,
      }
      expect(selectionModeOn(state, action)).toEqual(false)
    })
  })
})

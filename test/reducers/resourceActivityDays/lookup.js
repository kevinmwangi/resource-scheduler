import actionType from '../../../app/constants/actionTypes'

import lookup from '../../../app/reducers/resources/lookup'

describe('reducer: resources.lookup', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(lookup(state, action)).toEqual({})
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = {}
      const action = {}
      expect(lookup(state, action)).toBe(state)
    })
  })

  // describe(actionType.ACTION_NAME, function() {
  //   it('removes the id', function() {
  //     const state = ?
  //     const action = {
  //       type: actionType.ACTION_NAME
  //       ?
  //     }
  //     expect(lookup(state, action)).toEqual(?)
  //   })
  // })

})

import actionTypes from '../../../app/constants/actionTypes'

import ids from '../../../app/reducers/resources/ids'

describe('reducer: resources.ids', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(ids(state, {})).toEqual([])
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = []
      const action = {}
      expect(ids(state, action)).toBe(state)
    })
  })

  // describe(ACTION_NAME, function() {
  //   it('removes the id', function() {
  //     const state = ?
  //     const action = {
  //       type: ACTION_NAME,
  //       ?
  //     }
  //     expect(ids(state, action)).toEqual(?)
  //   })
  // })

})

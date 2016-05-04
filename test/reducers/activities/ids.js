import actionType from '../../../app/constants/actionTypes'

import ids from '../../../app/reducers/activities/ids'

describe('reducer: activities.ids', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(ids(state, action)).toEqual([])
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = []
      const action = {}
      expect(ids(state, action)).toBe(state)
    })
  })

  // describe(actionType.ACTION_NAME, function() {
  //   it('removes the id', function() {
  //     const state = ?
  //     const action = {
  //       type: actionType.ACTION_NAME
  //       ?
  //     }
  //     expect(ids(state, action)).toEqual(?)
  //   })
  // })

})

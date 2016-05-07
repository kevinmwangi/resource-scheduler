import actionType from '../../../app/constants/actionTypes'

import existingActivity from '../../../app/reducers/editing/existingActivity'

describe('reducer: editing.existingActivity', function() {
  describe('initial state', function() {
    it('is null', function() {
      const state = undefined
      const action = {}
      expect(existingActivity(state, action)).toEqual(null)
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = true
      const action = {}
      expect(existingActivity(state, action)).toBe(state)
    })
  })


  describe(actionType.EDIT_ACTIVITY, function() {
    it('returns the activity being edited', function() {
      const state = null
      const action = {
        type: actionType.EDIT_ACTIVITY,
        data: {
          activity: {id: 4, name: 'fun'},
        }
      }
      expect(existingActivity(state, action)).toEqual({id: 4, name: 'fun'})
    })
  })

  describe(actionType.CANCEL_EDIT_ACTIVITY, function() {
    it('returns null', function() {
      const state = {id: 4, name: 'fun'}
      const action = {
        type: actionType.CANCEL_EDIT_ACTIVITY
      }
      expect(existingActivity(state, action)).toEqual(null)
    })
  })

  describe(actionType.UPDATE_ACTIVITY_SUCCEEDED, function() {
    it('returns null', function() {
      const state = 'starting value'
      const action = {
        type: actionType.UPDATE_ACTIVITY_SUCCEEDED,
      }
      expect(existingActivity(state, action)).toEqual(null)
    })
  })
})

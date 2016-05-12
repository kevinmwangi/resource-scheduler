import actionType from '../../../app/constants/actionTypes'

import lookup from '../../../app/reducers/resourceActivityDays/lookup'

describe('reducer: resources.lookup', function() {
  const day1 = {
    activity_id: 1,
    day: "2016-03-20",
    hours: 4,
    id: 1,
    resource_id: 2,
    scheduled: false,
    uid: "2016-04-20:2:1",
  }

  const day2 = {
    activity_id: 2,
    day: "2016-03-15",
    hours: 3,
    id: 2,
    resource_id: 1,
    scheduled: true,
    uid: "2016-03-15:1:2",
  }

  describe('initial state', function() {
    it('is an empty object', function() {
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

  describe(actionType.UPDATE_STREAM_DAY_SELECTION, function() {
    it('returns state with any missing selected days added and existing days unchanged', function() {

      const state = {
        [day1.uid]: day1,
        [day2.uid]: day2,
      }

      const day2Changed = {
        activity_id: 2,
        day: "2016-03-15",
        hours: 0,
        id: 2,
        resource_id: 1,
        scheduled: false,
        uid: "2016-03-15:1:2",
      }

      const blankDay = {
        activity_id: 3,
        day: "2016-05-07",
        hours: 0,
        id: null,
        resource_id: 3,
        scheduled: true,
        uid: "2016-05-07:3:3",
      }

      const action = {
        type: actionType.UPDATE_STREAM_DAY_SELECTION,
        data: {
          selectedStreamDays: [
            day2Changed,
            blankDay,
          ]
        }
      }

      const expected = {
        [day1.uid]: day1,
        [day2.uid]: day2,
        [blankDay.uid]: blankDay,
      }

      expect(lookup(state, action)).toEqual(expected)
    })
  })
})

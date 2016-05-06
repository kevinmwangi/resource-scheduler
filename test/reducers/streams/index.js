import actionType from '../../../app/constants/actionTypes'

import streams from '../../../app/reducers/streams'

describe('reducer: streams', function() {
  describe('initial state', function() {
    it('is an empty array', function() {
      const state = undefined
      const action = {}
      expect(streams(state, action)).toEqual({})
    })
  })

  describe('with an uncaught action.type', function() {
    it('returns the given state', function() {
      const state = {}
      const action = {}
      expect(streams(state, action)).toBe(state)
    })
  })

  describe(actionType.INITIAL_DATA_LOADED, function() {
    it('removes the id', function() {
      const state = []
      const applicationState = {
        activities: {
          ids: [1,2,3,4],
          lookup: {
            1: {id: 1, name: 'Holiday'},
            2: {id: 2, name: 'Project 1'},
            3: {id: 3, name: 'Project 2'},
            4: {id: 4, name: 'Project 3'},
          }
        },
        days: [
          '2016-04-24', '2016-04-25', '2016-04-26', '2016-04-27', '2016-04-28',
        ],
        resources: {
          ids: [1,2,3,4],
          lookup: {
            1: {id: 1, name: 'neil'},
            2: {id: 2, name: 'room1'},
            3: {id: 3, name: 'jeff'},
            4: {id: 4, name: 'jim'},
          }
        },
        resourceActivityDays: {
          ids: [
            '2016-04-25:1:2', '2016-04-26:3:1', '2016-04-25:3:2', '2016-04-26:3:2'
          ],
          lookup: {
            '2016-04-25:1:2': {
              id: 1, day: '2016-04-25', resource_id: 1, activity_id: 2, hours: 5
            },
            '2016-04-26:3:1': {
              id: 2, day: '2016-04-26', resource_id: 3, activity_id: 1, hours: 4
            },
            '2016-04-25:3:2': {
              id: 3, day: '2016-04-25', resource_id: 3, activity_id: 2, hours: 3
            },
            '2016-04-26:3:2': {
              id: 4, day: '2016-04-26', resource_id: 3, activity_id: 2, hours: 2
            },
          }
        }
      }

      const action = {
        type: actionType.INITIAL_DATA_LOADED,
        data: applicationState,
      }

      const expectedStreams = {
        groupedByActivity: {
          '1': [
            {
              activity_id: 1,
              resourceActivityDays: [
                {
                  "activity_id": 1,
                  "day": "2016-04-24",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-25",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-26",
                  "hours": 4,
                  "id": 2,
                  "resource_id": 3,
                  "scheduled": true,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-27",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-28",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
              ],
              resource_id: 3,
              uid: '3:1',
            }
          ],
          '2': [
            {
              activity_id: 2,
              resourceActivityDays: [
                {
                  "activity_id": 2,
                  "day": "2016-04-24",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-25",
                  "hours": 5,
                  "id": 1,
                  "resource_id": 1,
                  "scheduled": true,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-26",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-27",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-28",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
              ],
              resource_id: 1,
              uid: '1:2'
            },
            {
              activity_id: 2,
              resourceActivityDays: [
                {
                  "activity_id": 2,
                  "day": "2016-04-24",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-25",
                  "hours": 3,
                  "id": 3,
                  "resource_id": 3,
                  "scheduled": true,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-26",
                  "hours": 2,
                  "id": 4,
                  "resource_id": 3,
                  "scheduled": true,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-27",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-28",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
              ],
              resource_id: 3,
              uid: '3:2'
            }
          ],
          '3': [],
          '4': [],
        },

        groupedByResource: {
          '1': [
            {
              activity_id: 2,
              resourceActivityDays: [
          {
                  "activity_id": 2,
                  "day": "2016-04-24",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-25",
                  "hours": 5,
                  "id": 1,
                  "resource_id": 1,
                  "scheduled": true,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-26",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-27",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-28",
                  "hours": 0,
                  "id": null,
                  "resource_id": 1,
                  "scheduled": false,
                },
              ],
              resource_id: 1, uid: '1:2'
            }
          ],
          '2': [],
          '3': [
            {
              activity_id: 1,
              resourceActivityDays: [
                {
                  "activity_id": 1,
                  "day": "2016-04-24",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-25",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-26",
                  "hours": 4,
                  "id": 2,
                  "resource_id": 3,
                  "scheduled": true,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-27",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 1,
                  "day": "2016-04-28",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
              ],
              resource_id: 3,
              uid: '3:1'
            },
            {
              activity_id: 2,
              resourceActivityDays: [
          {
                  "activity_id": 2,
                  "day": "2016-04-24",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-25",
                  "hours": 3,
                  "id": 3,
                  "resource_id": 3,
                  "scheduled": true,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-26",
                  "hours": 2,
                  "id": 4,
                  "resource_id": 3,
                  "scheduled": true,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-27",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
                {
                  "activity_id": 2,
                  "day": "2016-04-28",
                  "hours": 0,
                  "id": null,
                  "resource_id": 3,
                  "scheduled": false,
                },
              ],
              resource_id: 3,
              uid: '3:2'
            }
          ],
          '4': [],
        }
      }

      expect(streams(state, action)).toEqual(expectedStreams)
    })
  })

})

import actionType from '../../app/constants/actionTypes'

import getGroupedStreams from '../../app/selectors/getGroupedStreams'

describe('selector: getGroupedStreams', function() {
  it('returns streams grouped by activity and resource', function() {
    const state = {
      activities: {
        ids: [1,2,3],
        lookup: {
          1: {id: 1, name: 'Holiday'},
          2: {id: 2, name: 'Project 1'},
          3: {id: 3, name: 'Project 2'},
        }
      },
      days: [
        '2016-04-24', '2016-04-25', '2016-04-26'
      ],
      resources: {
        ids: [1,2,3],
        lookup: {
          1: {id: 1, name: 'neil'},
          2: {id: 2, name: 'room1'},
          3: {id: 3, name: 'jeff'},
        }
      },
      resourceActivityDays: {
        uids: [
          '2016-04-25:1:2', '2016-04-26:3:1', '2016-04-25:3:2', '2016-04-26:3:2'
        ],
        lookup: {
          '2016-04-26:3:1': {
            activity_id: 1,
            day: "2016-04-26",
            hours: 4,
            id: 2,
            resource_id: 3,
            scheduled: false,
            uid: '2016-04-26:3:1',
          },

          '2016-04-25:1:2': {
            activity_id: 2,
            day: "2016-04-25",
            hours: undefined,
            id: 1,
            resource_id: 1,
            scheduled: true,
            uid: '2016-04-25:1:2',
          },

          '2016-04-25:3:2': {
            activity_id: 2,
            day: "2016-04-25",
            hours: 0,
            id: 3,
            resource_id: 3,
            scheduled: true,
            uid: '2016-04-25:3:2',
          },
          '2016-04-26:3:2': {
            activity_id: 2,
            day: "2016-04-26",
            hours: 2,
            id: 4,
            resource_id: 3,
            scheduled: true,
            uid: '2016-04-26:3:2',
          },
        }
      }
    }

    const expectedStreams = {
      streamsGroupedByActivities: {
        '1': [
          {
            activity_id: 1,
            resource_id: 3,
            streamDays: [
              {
                activity_id: 1,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-24:3:1',
              },
              {
                activity_id: 1,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-25:3:1',
              },
              {
                activity_id: 1,
                day: "2016-04-26",
                hours: 4,
                id: 2,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-26:3:1',
              },
            ],
            uid: '3:1',
          },
          {
            activity_id: 1,
            resource_id: undefined,
            streamDays: [
              {
                activity_id: 1,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-24:undefined:1',
              },
              {
                activity_id: 1,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-25:undefined:1',
              },
              {
                activity_id: 1,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-26:undefined:1',
              },
            ],
            uid: 'undefined:1',
          }
        ],
        '2': [
          {
            activity_id: 2,
            resource_id: 1,
            streamDays: [
              {
                activity_id: 2,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 1,
                scheduled: false,
                uid: '2016-04-24:1:2',
              },
              {
                activity_id: 2,
                day: "2016-04-25",
                hours: undefined,
                id: 1,
                resource_id: 1,
                scheduled: true,
                uid: '2016-04-25:1:2',
              },
              {
                activity_id: 2,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: 1,
                scheduled: false,
                uid: '2016-04-26:1:2',
              },
            ],
            uid: '1:2'
          },
          {
            activity_id: 2,
            resource_id: 3,
            streamDays: [
              {
                activity_id: 2,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-24:3:2',
              },
              {
                activity_id: 2,
                day: "2016-04-25",
                hours: 0,
                id: 3,
                resource_id: 3,
                scheduled: true,
                uid: '2016-04-25:3:2',
              },
              {
                activity_id: 2,
                day: "2016-04-26",
                hours: 2,
                id: 4,
                resource_id: 3,
                scheduled: true,
                uid: '2016-04-26:3:2',
              },
            ],
            uid: '3:2'
          },
          {
            activity_id: 2,
            resource_id: undefined,
            streamDays: [
              {
                activity_id: 2,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-24:undefined:2',
              },
              {
                activity_id: 2,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-25:undefined:2',
              },
              {
                activity_id: 2,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-26:undefined:2',
              },
            ],
            uid: 'undefined:2',
          }
        ],
        '3': [
          {
            activity_id: 3,
            resource_id: undefined,
            streamDays: [
              {
                activity_id: 3,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-24:undefined:3',
              },
              {
                activity_id: 3,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-25:undefined:3',
              },
              {
                activity_id: 3,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: undefined,
                scheduled: false,
                uid: '2016-04-26:undefined:3',
              },
            ],
            uid: 'undefined:3',
          }
        ],
      },

      streamsGroupedByResources: {
        '1': [
          {
            activity_id: 2,
            resource_id: 1,
            streamDays: [
              {
                activity_id: 2,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 1,
                scheduled: false,
                uid: '2016-04-24:1:2',
              },
              {
                activity_id: 2,
                day: "2016-04-25",
                hours: undefined,
                id: 1,
                resource_id: 1,
                scheduled: true,
                uid: '2016-04-25:1:2',
              },
              {
                activity_id: 2,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: 1,
                scheduled: false,
                uid: '2016-04-26:1:2',
              },
            ],
            uid: '1:2'
          },
          {
            activity_id: undefined,
            resource_id: 1,
            streamDays: [
              {
                activity_id: undefined,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 1,
                scheduled: false,
                uid: '2016-04-24:1:undefined',
              },
              {
                activity_id: undefined,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: 1,
                scheduled: false,
                uid: '2016-04-25:1:undefined',
              },
              {
                activity_id: undefined,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: 1,
                scheduled: false,
                uid: '2016-04-26:1:undefined',
              },
            ],
            uid: '1:undefined',
          }
        ],
        '2': [
          {
            activity_id: undefined,
            resource_id: 2,
            streamDays: [
              {
                activity_id: undefined,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 2,
                scheduled: false,
                uid: '2016-04-24:2:undefined',
              },
              {
                activity_id: undefined,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: 2,
                scheduled: false,
                uid: '2016-04-25:2:undefined',
              },
              {
                activity_id: undefined,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: 2,
                scheduled: false,
                uid: '2016-04-26:2:undefined',
              },
            ],
            uid: '2:undefined',
          }
        ],
        '3': [
          {
            activity_id: 1,
            resource_id: 3,
            streamDays: [
              {
                activity_id: 1,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-24:3:1',
              },
              {
                activity_id: 1,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-25:3:1',
              },
              {
                activity_id: 1,
                day: "2016-04-26",
                hours: 4,
                id: 2,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-26:3:1',
              },
            ],
            uid: '3:1'
          },
          {
            activity_id: 2,
            resource_id: 3,
            streamDays: [
              {
                activity_id: 2,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-24:3:2',
              },
              {
                activity_id: 2,
                day: "2016-04-25",
                hours: 0,
                id: 3,
                resource_id: 3,
                scheduled: true,
                uid: '2016-04-25:3:2',
              },
              {
                activity_id: 2,
                day: "2016-04-26",
                hours: 2,
                id: 4,
                resource_id: 3,
                scheduled: true,
                uid: '2016-04-26:3:2',
              },
            ],
            uid: '3:2'
          },
          {
            activity_id: undefined,
            resource_id: 3,
            streamDays: [
              {
                activity_id: undefined,
                day: "2016-04-24",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-24:3:undefined',
              },
              {
                activity_id: undefined,
                day: "2016-04-25",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-25:3:undefined',
              },
              {
                activity_id: undefined,
                day: "2016-04-26",
                hours: undefined,
                id: null,
                resource_id: 3,
                scheduled: false,
                uid: '2016-04-26:3:undefined',
              },
            ],
            uid: '3:undefined',
          }
        ],
      }
    }

    expect(getGroupedStreams(state)).toEqual(expectedStreams)
  })
})

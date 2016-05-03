import stream from '../../app/selectors/stream'

describe('stream', function() {
  const props = {
    activities: {
      list: [1,2,3,4],
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
      list: [1,2,3,4],
      lookup: {
        1: {id: 1, name: 'neil'},
        2: {id: 2, name: 'room1'},
        3: {id: 3, name: 'jeff'},
        4: {id: 4, name: 'jim'},
      }
    },
    resourceActivityDays: {
      list: [
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

  it('is zero', function() {
    const options = Object.assign({
      resource_id: 3,
      activity_id: 2,
    }, props)
    expect(stream(options)).toEqual({
        uid: '3:2',
        resource_id: 3,
        activity_id: 2,
        resourceActivityDays: [
          {
            id: null, day: '2016-04-24', resource_id: 3, activity_id: 2, hours: 0, scheduled: false
          },
          {
            id: 3, day: '2016-04-25', resource_id: 3, activity_id: 2, hours: 3, scheduled: true
          },
          {
            id: 4, day: '2016-04-26', resource_id: 3, activity_id: 2, hours: 2, scheduled: true
          },
          {
            id: null, day: '2016-04-27', resource_id: 3, activity_id: 2, hours: 0, scheduled: false
          },
          {
            id: null, day: '2016-04-28', resource_id: 3, activity_id: 2, hours: 0, scheduled: false
          },
        ],
    })
  })
})

import getSelectedStreamDays from '../../app/selectors/getSelectedStreamDays'

describe('selector: getSelectedStreamDays', function() {
  it('returns an object with currently selected stream days', function() {
    const state = {
      activeStream: {
        selectedStreamDaysLookup: {
          '2016-04-26:3:1': true,
          '2016-04-25:3:2': false,
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

    const expected = {
      '2016-04-26:3:1': {
        activity_id: 1,
        day: "2016-04-26",
        hours: 4,
        id: 2,
        resource_id: 3,
        scheduled: false,
        uid: '2016-04-26:3:1',
      }
    }

    expect(getSelectedStreamDays(state)).toEqual(expected)
  })
})

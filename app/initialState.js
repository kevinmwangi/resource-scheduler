import moment from 'moment'

const activities = {
  ids: [1,2,3,4],
  lookup: {
    1: {id: 1, name: 'Project 1'},
    2: {id: 2, name: 'Project 2'},
    3: {id: 3, name: 'Project 3'},
    4: {id: 4, name: 'Admin'},
  }
}

const resources = {
  ids: [1,2,3,4,5],
  lookup: {
    1: {id: 1, name: 'neil'},
    2: {id: 2, name: 'room1'},
    3: {id: 3, name: 'hannah'},
    4: {id: 4, name: 'james'},
    5: {id: 5, name: 'ben'},
  }
}

export default {
  resources,
  activities,
}

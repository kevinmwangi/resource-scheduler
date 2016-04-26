import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ScheduleApp from './containers/ScheduleApp'

const store = createStore(
  () => ({})
)

ReactDom.render(
  <Provider store={store}>
    <ScheduleApp />
  </Provider>,
  document.getElementById('app-container')
)

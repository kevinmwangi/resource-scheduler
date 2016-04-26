import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import ScheduleApp from './containers/ScheduleApp'

const logger = createLogger()

const store = createStore(
  () => ({}), // reducer that does nothing
  {}, // initial state
  applyMiddleware(
    thunk,
    logger
  )
)

ReactDom.render(
  <Provider store={store}>
    <ScheduleApp />
  </Provider>,
  document.getElementById('app-container')
)

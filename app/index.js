import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import moment from 'moment'

import initialState from './initialState'
import reducers from './reducers'
import ScheduleApp from './containers/ScheduleApp'
import customLightTheme from './themes/customLightTheme';
import setDateRange from './actionCreators/commands/setDateRange'

const logger = createLogger()

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunk,
    logger
  )
)

const periodLength = 120
const halfPeriod = moment.duration(periodLength / 2, 'days')
const startDate = moment().startOf('day').subtract(halfPeriod).toISOString()
const endDate = moment().startOf('day').add(halfPeriod).toISOString()
store.dispatch(setDateRange({startDate, endDate}))

// Required by some material-react components
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin()

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(customLightTheme)}>
      <ScheduleApp />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app-container')
)

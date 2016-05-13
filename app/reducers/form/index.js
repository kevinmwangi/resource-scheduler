import {reducer as formReducer} from 'redux-form'
import streamDaysSettings from './streamDaysSettings'

export default formReducer.plugin({
  streamDaysSettings,
})

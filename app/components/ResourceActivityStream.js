import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import _ from 'underscore'

import ResourceActivityDay from './ResourceActivityDay'
import dimensions from '../constants/dimensions'

import colors from '../constants/colors'

const styles = {
  channel: {
    whiteSpace: 'nowrap',
    display: 'inline-block',
    paddingTop: dimensions.STREAM_SPACING,
    paddingBottom: dimensions.STREAM_SPACING,
    backgroundColor: 'none',
  },
}

export default class ResourceActivityStream extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    resourceActivityDays: PropTypes.object.isRequired,
    stream: PropTypes.object.isRequired,
    updateStreamDaySelection: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectionModeOn: false,
      selectedDayUids: {},
    }

    this.startSelectingStreamDays = this.startSelectingStreamDays.bind(this)
    this.selectStreamDay = this.selectStreamDay.bind(this)
    this.stopSelectingStreamDays = this.stopSelectingStreamDays.bind(this)

    const DEBOUNCE_TIME = 500
    this.updateStreamDaySelection = _.debounce(
      props.updateStreamDaySelection, DEBOUNCE_TIME
    )
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.isActive && nextProps.isActive != this.state.isActive) {
      this.state = {
        selectionModeOn: false,
        selectedDayUids: {},
      }
    }
  }

  startSelectingStreamDays(dayUid) {
    const selectedDayUids = Object.assign({}, this.state.selectedDayUids)
    selectedDayUids[dayUid] = !selectedDayUids[dayUid]
    this.setState({
      selectionModeOn: true,
      selectedDayUids: selectedDayUids,
    })
  }

  selectStreamDay(dayUid) {
    if(this.state.selectionModeOn) {
      const selectedDayUids = Object.assign({}, this.state.selectedDayUids)
      selectedDayUids[dayUid] = !selectedDayUids[dayUid]
      this.setState({selectedDayUids: selectedDayUids})
    }
  }

  stopSelectingStreamDays() {
    this.setState({selectionModeOn: false})
    const selectedDays = this.props.stream.streamDays.filter((day) => {
      return this.state.selectedDayUids[day.uid]
    })
    this.updateStreamDaySelection(selectedDays)
  }

  render() {
    const {
      isActive,
      resourceActivityDays,
      stream,
      updateStreamDaySelection,
    } = this.props

    const days = stream.streamDays.map((day) => {
      return (
        <ResourceActivityDay
          key={day.uid}
          hours={day.hours}
          scheduled={day.scheduled}
          streamIsActive={isActive}
          isSelected={!!this.state.selectedDayUids[day.uid]}
          startSelectingStreamDays={isActive ? this.startSelectingStreamDays : undefined}
          selectStreamDay={isActive ? this.selectStreamDay : undefined}
          stopSelectingStreamDays={isActive ? this.stopSelectingStreamDays : undefined}
          uid={day.uid}
        />
      )
    })

    const activationStyle = isActive ? styles.active : styles.inactive
    const zDepth = isActive ? 2 : 1

    return (
      <div
        className='ResourceActivityStream'
        style={Object.assign({}, styles.channel, activationStyle)}>
        <Paper
          zDepth={zDepth}
          rounded={false}
          onMouseLeave={() => {
            if(this.state.selectionModeOn) {
              this.stopSelectingStreamDays()
            }
          }}
          >
          {days}
        </Paper>
      </div>
    )
  }
}

import React, { Component, PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import _ from 'underscore'

import ResourceActivityDay from './ResourceActivityDay'
import dimensions from '../constants/dimensions'

import colors from '../constants/colors'

const styles = {
  channel: {
    backgroundColor: 'none',
    display: 'block',
    whiteSpace: 'nowrap',
    height: dimensions.STREAM_HEIGHT,
    width: '100%',
    paddingTop: dimensions.STREAM_SPACING,
    paddingBottom: dimensions.STREAM_SPACING,
  },
}

export default class ResourceActivityStream extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    resourceActivityDays: PropTypes.object.isRequired,
    stream: PropTypes.object.isRequired,
    updateStreamDaySelection: PropTypes.func.isRequired,
    selectedStreamDaysLookup: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      selectionModeOn: false,
      selectedStreamDaysLookup: {},
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
    const nowInactive = !nextProps.isActive
    const wasActive = this.state.isActive
    const justDeactivated = nowInactive && wasActive

    const noSelections = !Object.keys(nextProps.selectedStreamDaysLookup).length
    const wereSelections = !!Object.keys(this.state.selectedStreamDaysLookup).length
    const selectionCleared = noSelections && wereSelections

    if (justDeactivated || selectionCleared) {
      this.state = {
        selectionModeOn: false,
        selectedStreamDaysLookup: {},
      }
    }
  }

  startSelectingStreamDays(streamDayUid) {
    const selectedStreamDaysLookup = Object.assign(
      {}, this.state.selectedStreamDaysLookup
    )

    selectedStreamDaysLookup[streamDayUid] = !selectedStreamDaysLookup[streamDayUid]
    this.setState({
      selectionModeOn: true,
      selectedStreamDaysLookup: selectedStreamDaysLookup,
    })
  }

  selectStreamDay(streamDayUid) {
    if(this.state.selectionModeOn) {
      const selectedStreamDaysLookup = Object.assign(
        {}, this.state.selectedStreamDaysLookup
      )

      selectedStreamDaysLookup[streamDayUid] = !selectedStreamDaysLookup[streamDayUid]
      this.setState({selectedStreamDaysLookup: selectedStreamDaysLookup})
    }
  }

  stopSelectingStreamDays() {
    this.setState({selectionModeOn: false})
    const selectedStreamDays = this.props.stream
      .streamDays
      .filter((streamDay) => {
        return this.state.selectedStreamDaysLookup[streamDay.uid]
      })
    this.updateStreamDaySelection(selectedStreamDays)
  }

  render() {
    const {
      isActive,
      resourceActivityDays,
      stream,
      updateStreamDaySelection,
    } = this.props

    const streamDays = stream.streamDays.map((streamDay) => {
      return (
        <ResourceActivityDay
          key={streamDay.uid}
          hours={streamDay.hours}
          scheduled={streamDay.scheduled}
          streamIsActive={isActive}
          isSelected={!!this.state.selectedStreamDaysLookup[streamDay.uid]}
          startSelectingStreamDays={isActive ? this.startSelectingStreamDays : undefined}
          selectStreamDay={isActive ? this.selectStreamDay : undefined}
          stopSelectingStreamDays={isActive ? this.stopSelectingStreamDays : undefined}
          uid={streamDay.uid}
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
          style={styles.stream}
          onMouseLeave={() => {
            if(this.state.selectionModeOn) {
              this.stopSelectingStreamDays()
            }
          }}
          >
          {streamDays}
        </Paper>
      </div>
    )
  }
}

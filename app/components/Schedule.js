import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import ScheduleTable from '../components/ScheduleTable'

import EditorStream from '../components/EditorStream'
import EditorResource from '../components/EditorResource'
import EditorActivity from '../components/EditorActivity'

import NewButton from '../components/NewButton'
import streamsSelector from '../selectors/streamsSelector'

const styles = {
  Schedule: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    padding: 16,
  },
}

export default class Schedule extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editingResource: false,
      editingActivity: false,
      editingStream: false,
      streams: streamsSelector(props)
    }
  }

  openEditResource = () => { this.setState({editingResource: true}) };
  openEditActivity = () => { this.setState({editingActivity: true}) };
  openEditStream = () => { this.setState({editingStream: true}) };

  closeEditResource = () => { this.setState({editingResource: false}) };
  closeEditActivity = () => { this.setState({editingActivity: false}) };
  closeEditStream = () => { this.setState({editingStream: false}) };

  render(){
    return (
      <div className="Schedule" style={styles.Schedule}>

        <EditorResource open={this.state.editingResource}
          onClose={this.closeEditResource}
        />

        <EditorActivity open={this.state.editingActivity}
          onClose={this.closeEditActivity}
        />

        <EditorStream open={this.state.editingStream}
          onClose={this.closeEditStream}
        />

        <ScheduleTable
          {...this.props}
          streams={this.state.streams}
          style={styles.ScheduleTable}
        />

        <NewButton
          onNewStream={this.openEditStream}
          onNewResource={this.openEditResource}
          onNewActivity={this.openEditActivity}
        />

      </div>
    )
  }
}

import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmExampleConfirm extends Component {
  state = { active: false }

  show = () => this.setState({ active: true })
  handleConfirm = () => this.setState({ active: false })
  handleCancel = () => this.setState({ active: false })

  render() {
    return (
      <div>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          active={this.state.active}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default ConfirmExampleConfirm

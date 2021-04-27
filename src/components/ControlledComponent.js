import React, { Component } from 'react'

export class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      deadline: "",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Task:</label>
          <br />
          <input type="text" name="task" value={this.state.task} onChange={this.handleInputChange} />
          <br />
          <label>Deadline:</label>
          <br />
          <input type="text" name="deadline" value={this.state.deadline} onChange={this.handleInputChange} />
          <br />
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

export default ControlledComponent

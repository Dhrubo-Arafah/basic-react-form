import React, { Component, createRef } from 'react'

export class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.bookName = createRef();
    this.writer = createRef();
    this.description = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    console.log(this.bookName.current.value);
    console.log(this.writer.current.value);
    console.log(this.description.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>New Book Entry</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Book name:</label>
          <br />
          <input type="text" name="bookName" ref={this.bookName} />
          <br />
          <label>Writer:</label>
          <br />
          <input type="text" name="writer" ref={this.writer} />
          <br />
          <label>Description:</label>
          <br />
          <input type="text" name="description" ref={this.description} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UncontrolledComponent

import React, { Component } from 'react'

export class YoutubeForm extends Component {
 constructor(props) {
  super(props);
  this.state = {
   name: '',
   email: '',
   channel: ''
  }
  this.inputChangeHandler = this.inputChangeHandler.bind(this);
  this.submitHandler = this.submitHandler.bind(this);
 }
 

 inputChangeHandler = event => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 submitHandler = event => {
  console.log(this.state);
  event.preventDefault();
}

 render() {
  return (
   <div>

    <form onSubmit={this.submitHandler}>

     <label htmlFor="name">Name</label>
     <input type="text" value={this.state.name} name="name" onChange={this.inputChangeHandler}/>

     <label htmlFor="email">Email</label>
     <input type="email" value={this.state.email} name="email" onChange={this.inputChangeHandler} />

     <label htmlFor="channel">Channel</label>
     <input type="text" value={this.state.channel} name="channel" onChange={this.inputChangeHandler} />

     <button type="submit">Submit</button>

    </form>
   
   </div>
  )
 }
}

export default YoutubeForm

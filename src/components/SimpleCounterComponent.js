

import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      toggle:false,
      count:0
    }
  }

  toggleLock = ()=>{
    if(this.state.toggle ===false){
    this.setState({
      toggle:true
    })
  }
  else{
    this.setState({
      toggle:false
    })
  }}


  counterIncrement = ()=>{
    if(this.state.toggle===true){
      this.setState({
        count:this.state.count+1
      })
    }
  }
  


  render() {
    console.log("This is Simple Component")
    return (
      <div>
        <h1>Simple Component</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.toggleLock}>Set Toggle</button>
        <button onClick={this.counterIncrement}>Counter</button>
      </div>
    )
  }
}
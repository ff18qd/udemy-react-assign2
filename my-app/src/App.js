import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    input: "",
    inLength: 0
  }
  
  changeInputHandler = (event) => {
    // debugger
    this.setState({
      input: event.target.value,
      inLength: event.target.value.length
    })
    // debugger
  }
  
  
  render() {
    return (
      <div className="App">
        <input onChange={this.changeInputHandler} />
        <p>{this.state.inLength}</p>
        <ValidationComponent inLength={this.state.inLength}/>
        <CharComponent />
      </div>
    );
  }
}

export default App;


        // <UserInput 
        //   change={this.changeInputHandler}
        //   inLength={this.state.inLength}
        // />
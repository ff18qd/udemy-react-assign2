import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    inputText: "",
    inLength: 0
  }
  
  changeInputHandler = (event) => {
    // debugger
    this.setState({
      inputText: event.target.value,
      inLength: event.target.value.length
    })
    // console.log(this.state.inputText.split(""))
  }
  
  deleteCharHandler = (charIndex) => {
    let chars = [...this.state.inputText];
    const temp = [...chars.slice(0,charIndex),...chars.slice(charIndex+1)]
    console.log(temp)
    // const newChars = ;
    // console.log(newChars)
    this.setState({
      inputText: temp.join("")
    })
  }
  
  render() {
    
    let chars = null;
    if (this.state.inLength>0) {
      chars = (
        <div>
          {this.state.inputText.split("").map( (ele,index) => {
            return <CharComponent 
              displayChar={ele}
              click = {()=>this.deleteCharHandler(index)}
              key = {index}
              />
          })}
        </div>
      )
    }
    
    return (
      <div className="App">
        <input onChange={this.changeInputHandler} />
        <p>{this.state.inLength}</p>
        <ValidationComponent inLength={this.state.inLength}/>
        {chars}
      </div>
    );
  }
}

export default App;



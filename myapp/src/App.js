import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <h2>Welcome :)</h2>
        <Ninjas name="Ryu" age="25" belt="black"/>
      </div>
    )
  }
}

export default App;
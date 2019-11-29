import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: "25", belt: "black", id: 1 },
      { name: "Yoshi", age: "20", belt: "green", id: 2 },
      { name: "Crystal", age: "30", belt: "pink", id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();

    /* copy array using spread operator and add new array */
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
      // if id =id is equal false
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount() {
    console.log('component mounted')
  }
  componentDidUpdate(prevProp, prevState) {
    console.log('component updated');
    console.log(prevProp, prevState);

  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <h2>Welcome :)</h2>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;

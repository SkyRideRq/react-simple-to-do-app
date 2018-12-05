import React, { Component } from 'react';
import ToDo from './toDo'
import AddToDo from './addForm'
class App extends Component {
  state = {
    toDo:[
      {id:1, content:'make game'},
      {id:2, content:'play some game'}
    ]
  }
  delToDo = (id) => {
    const newToDo = this.state.toDo.filter(e => {
      return e.id !== id
    })
    this.setState({
      toDo: newToDo
    })
  }
  addToDo = (todo) => {
    todo.id = Math.random();
    let newToDo = [...this.state.toDo, todo];
    this.setState({
      toDo:newToDo
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Do zrobienia</h1>
        <ToDo toDo={this.state.toDo} delToDo={this.delToDo}/>
        <AddToDo addToDo={this.addToDo}/>
      </div>
    );
  }
}

export default App;

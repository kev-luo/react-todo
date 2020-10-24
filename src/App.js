import React, { Component } from 'react';
import Todos from './todos';
import AddTodos from './AddTodos';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({todos})
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's </h1>
        <AddTodos addTodo={this.addTodo} />
        <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  deleteProject(id) {
    this.props.onDelete(id)
  }

  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo} />
         );
      });
    }
    console.log(this.props);
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array
};

export default Todos;

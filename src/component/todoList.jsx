import React, { Component } from "react";
import TodoItem from "./todoItem";
import PropTypes from "prop-types";
class TodoList extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.todos.map((todo) => (
          <TodoItem
          style ={{margin:'1px'}}
            markCompleted={this.props.markCompleted}
            deleTodo ={this.props.deleTodo}
            key={todo.id}
            todo={todo}
          />
        ))}
      </React.Fragment>
    );
  }
}
// Prop Types
TodoList.prototypes = {
  todoList: PropTypes.array.isRequired,
};

export default TodoList;

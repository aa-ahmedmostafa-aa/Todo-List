import React, { Component } from "react";
import PropTypes from "prop-types";
class TodoItem extends Component {
  state = {};

  getItemStyle = () => {
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  trashStyle = {
    cursor: "pointer",
    float: "right",
  };
  render() {
    const { todo } = this.props;
    return (
      <React.Fragment>
        <div style={this.getItemStyle()}>
          <p>
            <input
              type="checkbox"
              onChange={() => this.props.markCompleted(todo.id)}
            />{" "}
            {todo.title}
            <i
              onClick={() => this.props.deleTodo(todo.id)}
              style={this.trashStyle}
              className="fas fa-trash"
            ></i>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
// Prop Types
TodoItem.prototypes = {
  todoItem: PropTypes.object.isRequired,
};

export default TodoItem;

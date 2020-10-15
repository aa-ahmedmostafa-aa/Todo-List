import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import TodoList from "../todoList";
import "./app.css";
import Header from "./../layouts/header";
import AddTodo from "../addTodo";
import About from "./../../pages/about";
import Nav from "../nav";
class App extends Component {
  state = {
    todos: [
      { id: 1, title: "Take out the Trash", completed: false },
      { id: 2, title: "Dinner with wife", completed: true },
      { id: 3, title: "Meeting with boss", completed: false },
      { id: 4, title: "Studying React js", completed: false },
      { id: 5, title: "Studing Node js", completed: false },
    ],
  };

  // Toggele Complete
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  deleTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo.id != id) {
          return todo;
        }
      }),
    });
  };
  handelSubmit = (title) => {
    if (title == "") {
      toast.error("Sorry Can't Submit Empty Todo");
    } else {
      //clone
      let todos = [...this.state.todos];
      let obj = { id: todos.length + 1, completed: false, title: title };
      //edit
      todos.push(obj);
      //setState
      this.setState({ todos });
    }
  };
  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <div className="container">
          <Header />
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <React.Fragment>
                  <AddTodo handelSubmit={this.handelSubmit} />
                  <TodoList
                    markCompleted={this.markCompleted}
                    deleTodo={this.deleTodo}
                    todos={this.state.todos}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

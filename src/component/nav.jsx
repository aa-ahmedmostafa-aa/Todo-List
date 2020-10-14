import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Nav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar-light bg-light">
          <NavLink className="nav-item navbar-brand" to="/home">
            TodoList
          </NavLink>
          <NavLink className="nav-item navbar-brand" to="/about">
            About
          </NavLink>
        </nav>
      </React.Fragment>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    margin: "2px",
    marginBottom: "10px",
  };
  linkStyle ={
    color: "#fff",
    textDecoration:'none'
  }
  render() {
    return (
      <React.Fragment>
        <header style={this.headerStyle}>
          <h1>Todo List</h1>
          <NavLink style={this.linkStyle} to="/home"> Home </NavLink> | 
          <NavLink style={this.linkStyle} to="/about">  About</NavLink>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;

import React, { Component } from "react";
class AddTodo extends Component {
  state = {
    title: "",
  };
  handelChange = (e) => {
    //clone
    let state = { ...this.state };
    //edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //setState
    this.setState(state);
  };
  onSubmit = e =>{
      e.preventDefault();
      this.props.handelSubmit(this.state.title)
  }
  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.onSubmit}
          style={{ display: "flex", marginBottom: "5px" }}
        >
          <input
            className="form-control"
            type="text"
            value={this.state.title}
            onChange={this.handelChange}
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Add  Todo ...."
          />
          <input
            type="submit"
            value="submit"
            className="btn btn-dark"
            style={{ flex: "1" }}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;

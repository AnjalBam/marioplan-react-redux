import React, { Component } from "react";

class CreateProject extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create New Project</h5>
          <div className="input-field">
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              onChange={this.handleChange}
              className="materialize-textarea"></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0" type="submit">
              CreateProject
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;

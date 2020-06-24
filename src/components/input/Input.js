import React, { Component } from "react";
import "./Input.css";

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minNum: 2,
      maxNum: 10,
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.inputs([this.state.minNum, this.state.maxNum]);
    this.props.history.push("/timer");
  }
  render() {
    return (
      <div className="form-container">
        <div className="header">Please enter a fizz and buzz time in seconds. <strong>Values should be 2 to 10 inclusive.</strong></div>
        <form onSubmit={this.handleSubmit}>
          <label className="labels">Fizz:</label>
          <input
            type="number"
            min="2"
            max="10"
            required
            name="minNum"
            onChange={this.handleInputChange}
            value={this.state.minNum}
            className="inputs"
          ></input>
          <label className="labels">Buzz:</label>
          <input
            type="number"
            min="2"
            max="10"
            required
            name="maxNum"
            onChange={this.handleInputChange}
            value={this.state.maxNum}
            className="inputs"
          ></input>
          <button className="timer-btn" type="submit">Go to Timer > </button>
        </form>
      </div>
    );
  }
}

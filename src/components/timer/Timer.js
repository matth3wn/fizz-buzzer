import React, { Component } from "react";
import TimeElapsed from "./TimeElapsed";
import FizzBuzz from "../fizzbuzz/FizzBuzz";
import "./Timer.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState = {
      isRunning: false,
      timeElapsed: 0,
      fizzBuzz: ""
    };
  }
  start = () => {
    this.setState({ isRunning: true }, () => {
      this.startTimer() 
    });
  };
  reset = () => {
    if(this.state.isRunning) {
      this.setState( { isRunning: false}, () => {
        clearInterval(this.timer);
      })
    } else {
      this.setState(this.initialState);
    }
  };
  startTimer = () => {
    this.startTime = Date.now();
    this.timer = setInterval(this.update, 1000);
  };
  update = () => {
    const diff = Date.now() - this.startTime;
    let message = ''
    this.setState({timeElapsed: this.state.timeElapsed + diff});
    if(Math.floor(this.state.timeElapsed /1000) % this.props.inputs[0] === 0) {
      message = "fizz"
    }
    if(Math.floor(this.state.timeElapsed /1000) % this.props.inputs[1] === 0) {
      message += "buzz"
    }
    this.setState({ 
      fizzBuzz: message || "" ,
    });
    this.startTime = Date.now();
  };
  back = () => {
    this.props.history.push("/");
  };
  render() {
    const { timeElapsed } = this.state;
    return (
      <div>
        <button className="timer-button" onClick={this.back}>{"< Set Times"}</button>
        <div className="time">
          <div id="time-header">Time Elapsed</div>
          <div className="time-container">
            <TimeElapsed timeElapsed={timeElapsed} />
          </div>
          <button className="time-btn" id="start" onClick={this.start}>Start</button>
          <button className="time-btn" id="reset" onClick={this.reset}>{"Stop / Reset"}</button>
          <FizzBuzz inputs={this.state.fizzBuzz} />
        </div>
      </div>
    );
  }
}
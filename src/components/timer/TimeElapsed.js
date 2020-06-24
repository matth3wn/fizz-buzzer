import React, { Component } from "react";
import { leftPad } from "../utils";

export default class TimeElapsed extends Component {
  getTime = () => {
    const seconds = this.props.timeElapsed / 1000;
    console.log(seconds)
    return {
      hour: Math.floor((seconds / 3600) % 24).toString(),
      min: Math.floor((seconds / 60) % 60).toString(),
      sec: Math.floor(seconds % 60).toString(),
    };
  };
  render() {
    const units = this.getTime();
    return (
      <div>
        <span>{units.hour}:</span>
        <span>{leftPad(2, units.min)}:</span>
        <span>{leftPad(2, units.sec)}</span>
      </div>
    );
  }
}

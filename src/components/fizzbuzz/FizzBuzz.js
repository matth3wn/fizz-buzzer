import React from "react";
import "./FizzBuzz.css";

export default function FizzBuzz( props ) {
    return (
        <div className="fizz-buzz">
            {props.inputs}
        </div>
    )
}
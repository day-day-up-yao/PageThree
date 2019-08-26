import React, { Component } from "react";
import "./index.css"
export default class Loading extends Component {
  render() {
    return (
      <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
    )
  }
}
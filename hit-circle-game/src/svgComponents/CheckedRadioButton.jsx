import React, { Component } from "react";
class CheckedRadioButton extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          fill={this.props.fillColor ? this.props.fillColor : "green"}
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
        />
        <circle
          fill={this.props.fillColor ? this.props.fillColor : "green"}
          cx="12"
          cy="12"
          r="5"
        />
      </svg>
    );
  }
}

export default CheckedRadioButton;

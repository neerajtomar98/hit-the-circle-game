import React, { Component } from "react";
class FilledRadioButton extends Component {
    render() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="45"
                viewBox="0 0 24 24"
                width="45"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    fill="#FF00FF"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                />
            </svg>
        );
    }
}

export default FilledRadioButton;

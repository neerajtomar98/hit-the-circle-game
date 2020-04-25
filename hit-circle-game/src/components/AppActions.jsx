import React from "react";
import "../styles.css";

class AppActions extends React.Component {
  onPlay = event => {
    this.props.startGame();
  };

  onStop = event => {
    this.props.stopGame();
  };

  render() {
    return (
      <div className="app-actions-container">
        <button className="action-button play-button" onClick={this.onPlay}>
          Play
        </button>
        <button className="action-button" onClick={this.onStop}>
          {" "}
          Stop{" "}
        </button>
      </div>
    );
  }
}
export default AppActions;

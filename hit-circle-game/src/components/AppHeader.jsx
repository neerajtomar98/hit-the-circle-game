import React from "react";
import "../styles.css";

class AppHeader extends React.Component {
  render() {
    return (
      <div className="app-header-container">
        <div className="game-header-heading">
          <h2>Hit the circle</h2>
        </div>
        <div className="game-description">
          Test your skill, how many circles you can hit
        </div>
        <div className="game-score-container">
          <label className="score-label">Score</label>
          <div className="score-value"> {this.props.score}</div>
        </div>
      </div>
    );
  }
}
export default AppHeader;

import React from "react";
import "../styles.css";

class AppHeader extends React.Component {
    render() {
        return (
            <div className="app-header-container">
                <div className="game-header-heading">
                    Hit the circle
                </div>
                <div className="game-description">
                    <h3>Test your skill, how many circles you can hit <span>&#128515;</span> </h3>
                </div>
                <div className="game-score-container">
                    <div className="score-div">Score: &nbsp;</div>
                    {this.props.score}
                </div>
            </div>
        );
    }
}
export default AppHeader;

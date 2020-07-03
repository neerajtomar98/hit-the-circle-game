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
                <button
                    className={this.props.isGameStarted ?
                        "action-button play-button play-button-disabled"
                        : "action-button play-button"
                    }
                    onClick={this.onPlay}>
                    Play
        </button>
                <button
                    className={this.props.isGameStarted ? "action-button" : "action-button disabled"}
                    onClick={this.onStop}>
                    Stop
        </button>
            </div>
        );
    }
}
export default AppActions;

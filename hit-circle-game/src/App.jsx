import React from "react";
import "./styles.css";
import AppHeader from "./components/AppHeader";
import AppPlayGround from "./components/AppPlayGround";
import AppActions from "./components/AppActions";
import Popup from "./components/Popup.";
import { circleMatrixDimensions } from "./data/appData.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            selectedItem: {},
            isGameStarted: false,
            showPopup: false,
            timerId: null
        };
    }

    resetGame = () => {
        this.setState({ score: 0, selectedItem: {} });
    };

    incrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.score + 1
            };
        });
    };

    decrementScore = () => {
        this.setState(prevState => {
            return {
                score: prevState.score - 1
            };
        });
    };

    generateRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    selectRandomItem = () => {
        let item = {};
        item.rowId = this.generateRandomInRange(0, circleMatrixDimensions.rows - 1);

        item.columnId = this.generateRandomInRange(
            0,
            circleMatrixDimensions.columns - 1
        );

        this.setState({ selectedItem: item });

        return item;
    };

    onHitCircle = isCorrectHit => {
        if (isCorrectHit === false) {
            this.decrementScore();
            // this.clearTimer();
            // this.setState({ selectedItem: {} });
            return;
        }
        this.incrementScore();
    };

    clearTimer = () => {
        if (this.state.timerId) {
            console.log("in clear timer");
            clearInterval(this.state.timerId);
        }
    };

    startTimer = () => {
        this.clearTimer();
        let timerId = setInterval(() => this.selectRandomItem(), 2000);
        this.setState({ timerId: timerId });
    };

    startGame = () => {
        console.log("started game");
        this.setState({ score: 0, selectedItem: {}, isGameStarted: true }, () => {
            this.startTimer();
        });
    };

    stopGame = () => {
        console.log("clearing timer, stopping game");
        this.clearTimer();
        this.setState({
            isGameStarted: false,
            selectedItem: {},
            showPopup: true
        });
    };

    showPopup = () => {
        this.setState({ showPopup: true });
    };

    hidePopup = () => {
        console.log("in hide popup");
        this.setState({ showPopup: false, score: 0 });
    };

    render() {
        return (
            <div className="app-container">
                <div className="app-content">
                    <AppHeader {...this.props} score={this.state.score} />
                    <AppPlayGround
                        {...this.props}
                        isGameStarted={this.state.isGameStarted}
                        selectedItem={this.state.selectedItem}
                        onIncrementScore={this.incrementScore}
                        onDecrementScore={this.decrementScore}
                        onHitCircle={this.onHitCircle}
                    />
                    <AppActions
                        {...this.props}
                        startGame={this.startGame}
                        stopGame={this.stopGame}
                    />
                </div>
                {this.state.showPopup ? (
                    <Popup score={this.state.score} hidePopup={this.hidePopup} />
                ) : null}
            </div>
        );
    }
}

export default App;

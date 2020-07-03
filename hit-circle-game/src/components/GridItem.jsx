import React from "react";
import "./componentStyles.sass";
import CheckedRadioButton from "../svgComponents/CheckedRadioButton";
import UnCheckedRadioButton from "../svgComponents/UnCheckedRadioButton";
import FilledRadioButton from "../svgComponents/FilledRadioButton";

class GridItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemClicked: false,
            isCorrect: null
        };
    }

    isItemSelected = () => {
        let isItemSelected = false;
        if (
            this.props.selectedItem &&
            this.props.selectedItem.rowId !== undefined &&
            this.props.selectedItem.columnId !== undefined &&
            (this.props.rowId === this.props.selectedItem.rowId &&
                this.props.columnId === this.props.selectedItem.columnId)
        ) {
            isItemSelected = true;
        }
        return isItemSelected;
    };

    onHitCircle = event => {
        event.stopPropagation();
        let isCorrectHit = this.isItemSelected();
        if (isCorrectHit) {
            console.log("correct hit");
            this.setState({ isCorrect: true, itemClicked: true });
        }
        else {
            console.log("false hit");
            this.setState({ isCorrect: false, itemClicked: true });
        }
        this.props.onHitCircle(isCorrectHit);
    };

    renderRadioIcon = () => {

        if (this.props.isGameStarted === false) {
            return <UnCheckedRadioButton />;
        }

        if (this.isItemSelected()) {
            return <FilledRadioButton />;
        }

        if (
            this.props.isGameStarted && this.state.itemClicked
        ) {
            if (this.state.isCorrect) {
                return <CheckedRadioButton fillColor="green" />;
            } else {
                return <CheckedRadioButton fillColor="red" />;
            }
        }

        return <UnCheckedRadioButton />;
    };

    render() {
        return (
            <div className="grid-item" onClick={this.onHitCircle}>
                {this.renderRadioIcon()}
            </div>
        );
    }
}
export default GridItem;

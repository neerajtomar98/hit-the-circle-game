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
    let isCorrect = false;
    if (
      this.props.selectedItem &&
      this.props.selectedItem.rowId !== undefined &&
      this.props.selectedItem.columnId !== undefined &&
      (this.props.rowId === this.props.selectedItem.rowId &&
        this.props.columnId === this.props.selectedItem.columnId)
    ) {
      isCorrect = true;
    }
    return isCorrect;
  };

  onHitCircle = event => {
    let isCorrectHit = this.isItemSelected();
    if (isCorrectHit) {
      console.log("correct hit");
      this.setState({ itemClicked: true, isCorrect: true }, () => {
        this.props.onHitCircle(isCorrectHit);
      });
    } else {
      console.log("wrong hit");
      this.setState({ itemClicked: true, isCorrect: false }, () => {
        this.props.onHitCircle(isCorrectHit);
      });
    }
  };

  renderRadioIcon = () => {
    if (this.props.isGameStarted === false) {
      return <UnCheckedRadioButton />;
    }

    if (this.isItemSelected()) {
      return <FilledRadioButton />;
    }

    // if (this.state.itemClicked === false) {
    //   return <UnCheckedRadioButton />;
    // }

    // if (
    //   this.props.isGameStarted &&
    //   this.props.selectedItem &&
    //   this.state.itemClicked
    // ) {
    //   if (this.state.isCorrect) {
    //     return <CheckedRadioButton fillColor="green" />;
    //   } else {
    //     return <CheckedRadioButton fillColor="red" />;
    //   }
    // }

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

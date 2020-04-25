import React from "react";
import "./componentStyles.sass";
import { circleMatrixDimensions } from "../data/appData.js";
import GridItem from "./GridItem";

class AppPlayGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedItem: {}
    };
  }

  renderCicleGrid = () => {
    let circleGrid = [];
    for (let i = 0; i < circleMatrixDimensions.rows; i++) {
      let row = [];
      for (let j = 0; j < circleMatrixDimensions.columns; j++) {
        row.push(
          <GridItem
            key={"item_" + i + "_" + j + this.props.isGameStarted}
            {...this.props}
            rowId={i}
            columnId={j}
          />
        );
      }
      circleGrid.push(
        <div key={"circle_row" + i} className="grid-row">
          {row}
        </div>
      );
    }
    return <div>{circleGrid}</div>;
  };

  render() {
    return (
      <div className="app-play-ground-container">{this.renderCicleGrid()}</div>
    );
  }
}
export default AppPlayGround;

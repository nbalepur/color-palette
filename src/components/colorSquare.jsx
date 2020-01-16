import React, { Component } from "react";
//various button images
import editBtnImage from "./images/editButton.png";
import lockLockedImage from "./images/lock-locked.png";
import lockUnlockedImage from "./images/lock-unlocked.png";
import deleteBtnImage from "./images/deleteButton.png";
import rightBtnImage from "./images/rightArrow.png";
import leftBtnImage from "./images/leftArrow.png";
//style sheet
import "./styles/gridStyling.css";

class ColorSquare extends Component {
  //helper method that calls handleChange in colorGrid component

  //changes lock image based on isLocked property
  setLockImage = () => {
    if (this.props.colorSquare.isLocked) {
      return lockLockedImage;
    } else {
      return lockUnlockedImage;
    }
  };

  render() {
    console.log(this.props.gridLength);
    return (
      <div class="left-float">
        <div class="color-square" style={this.props.colorSquare.squareStyle}>
          <span class="helper"></span>
          <img
            class="lock-button"
            src={this.setLockImage()}
            alt={"lock button"}
            onClick={() => this.props.handleLockPress(this.props.colorSquare)}
          ></img>
          <img
            class="delete-button"
            src={deleteBtnImage}
            alt={"delete button"}
            onClick={() => this.props.onDelete(this.props.colorSquare)}
          ></img>
          {this.props.colorSquare.index !== 0 && (
            <img
              class="left-arrow"
              src={leftBtnImage}
              alt={"left arrow"}
              onClick={() =>
                this.props.swapSquares(this.props.colorSquare, "left")
              }
            ></img>
          )}
          <img
            class="edit-button"
            src={editBtnImage}
            alt={"edit button"}
            onClick={() => this.props.openColorPicker(this.props.colorSquare)}
          ></img>
          {this.props.colorSquare.index !== this.props.gridLength - 1 && (
            <img
              class="right-arrow"
              src={rightBtnImage}
              alt={"right arrow"}
              onClick={() =>
                this.props.swapSquares(this.props.colorSquare, "right")
              }
            ></img>
          )}
          <h1 class="color-text">
            {this.props.colorSquare.squareStyle.backgroundColor}
          </h1>
        </div>
      </div>
    );
  }
}

export default ColorSquare;

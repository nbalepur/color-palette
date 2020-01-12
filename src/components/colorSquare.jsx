import React, { Component } from "react";
import { SketchPicker } from "react-color";
//various button images
import editBtnImage from "./images/editButton.png";
import acceptBtnImage from "./images/acceptButton.png";
import declineBtnImage from "./images/declineButton.png";
import lockLockedImage from "./images/lock-locked.png";
import lockUnlockedImage from "./images/lock-unlocked.png";
import deleteBtnImage from "./images/deleteButton.png";

import "./gridStyling.css";

class ColorSquare extends Component {
  handleChange = (color, event) => {
    this.props.handleChange(color, this.props.colorSquare);
  };

  setLockImage = () => {
    if (this.props.colorSquare.isLocked) {
      return lockLockedImage;
    } else {
      return lockUnlockedImage;
    }
  };

  render() {
    return (
      <div class="left-float">
        <div class="color-square" style={this.props.colorSquare.squareStyle}>
          {!this.props.colorSquare.showAcceptDecline && (
            <img
              class="edit-button"
              src={editBtnImage}
              alt={"edit button"}
              onClick={() => this.props.openColorPicker(this.props.colorSquare)}
            ></img>
          )}
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
          {this.props.colorSquare.showAcceptDecline && (
            <img
              class="accept-decline-buttons"
              src={acceptBtnImage}
              alt={"accept button"}
              onClick={() => this.props.onAccept(this.props.colorSquare)}
            ></img>
          )}
          {this.props.colorSquare.showAcceptDecline && (
            <img
              class="accept-decline-buttons"
              src={declineBtnImage}
              alt={"decline button"}
              onClick={() => this.props.onDecline(this.props.colorSquare)}
            ></img>
          )}
          <h1>{this.props.colorSquare.squareStyle.backgroundColor}</h1>
        </div>
        {this.props.colorSquare.showPicker && (
          <SketchPicker
            disableAlpha={true}
            presetColors={[]}
            width={this.props.colorSquare.squareStyle.width - 20}
            onChange={this.handleChange}
            color={this.props.colorSquare.squareStyle.backgroundColor}
          />
        )}
      </div>
    );
  }
}

export default ColorSquare;

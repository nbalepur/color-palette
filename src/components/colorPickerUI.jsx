import React, { Component } from "react";

class ColorPickerUI extends Component {
  state = {
    previousColorStyle: {
      width: 90,
      height: 50,
      backgroundColor: "red"
    },
    newColorStyle: {
      width: 90,
      height: 50,
      backgroundColor: "blue"
    },
    holderStyle: {
      width: 90
    }
  };

  createStyle = str => {
    if (str === "previous") {
      var newStyle = {
        width: 90,
        height: 50,
        backgroundColor: this.props.colorSquare.prevColor
      };
    } else {
      newStyle = {
        width: 90,
        height: 50,
        backgroundColor: this.props.colorSquare.squareStyle.backgroundColor
      };
    }
    return newStyle;
  };

  render() {
    return (
      <div style={this.state.holderStyle} class="color-preview-holder">
        <p class="color-preview-text">new</p>
        <div style={this.createStyle("new")}></div>
        <div style={this.createStyle("previous")}></div>
        <p class="color-preview-text">previous</p>
        <br></br>
        <button
          class="accept-decline"
          onClick={() => this.props.onAccept(this.props.colorSquare)}
        >
          accept
        </button>
        <button
          class="accept-decline"
          onClick={() => this.props.onDecline(this.props.colorSquare)}
        >
          decline
        </button>
      </div>
    );
  }
}

export default ColorPickerUI;

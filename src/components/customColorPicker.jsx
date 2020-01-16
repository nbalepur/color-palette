import React, { Component } from "react";
import "./styles/colorPickerStyling.css";
import { SketchPicker } from "react-color";
import ColorPickerUI from "./colorPickerUI";

import "react-color-picker/index.css";

class CustomColorPicker extends Component {
  state = {
    borderStyle: {
      width: 375,
      height: 270
    },
    colorPickerStyle: {
      width: 240,
      height: 235
    }
  };

  handleChange = (color, event) => {
    this.props.handleChange(color, this.props.colorSquare);
  };

  render() {
    return (
      <div className="border" style={this.state.borderStyle}>
        <div
          className="color-picker-holder"
          style={this.state.colorPickerStyle}
        >
          <SketchPicker
            color={this.props.colorSquare.squareStyle.backgroundColor}
            onChange={this.handleChange}
            disableAlpha={true}
            presetColors={[]}
            width={this.state.colorPickerStyle.width - 20}
          ></SketchPicker>
        </div>
        <div class="UI-holder">
          <ColorPickerUI
            onAccept={this.props.onAccept}
            onDecline={this.props.onDecline}
            colorSquare={this.props.colorSquare}
          ></ColorPickerUI>
        </div>
      </div>
    );
  }
}

export default CustomColorPicker;

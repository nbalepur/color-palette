import React, { Component } from "react";
import { SketchPicker } from "react-color";
import "./styles/colorPickerStyling.css";

class CenteredColorPicker extends Component {
  const;
  render() {
    return (
      <div class="container">
        <SketchPicker
          disableAlpha={this.props.disableAlpha}
          presetColors={this.props.presetColors}
          width={this.props.width}
          onChange={this.props.onChange}
          color={this.props.color}
        ></SketchPicker>
      </div>
    );
  }
}

export default CenteredColorPicker;

import React, { Component } from "react";
import ColorSquare from "./colorSquare";
import randomColor from "randomcolor";
import CustomColorPicker from "./customColorPicker";
//button images
import addBtnImage from "./images/addButton.png";
//style sheet
import "./styles/gridStyling.css";

class ColorGrid extends Component {
  //constructor to add listener to window resizing
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  state = {
    //contains the state of the custom color picker object
    colorPickerState: {
      showColorPicker: false,
      activeColorSquare: 0
    },
    //state containing array of color square objects
    colorSquares: [
      {
        index: 0,
        prevColor: this.props.initialColors[0],
        isLocked: false,
        squareStyle: {
          backgroundColor: this.props.initialColors[0],
          height: 500,
          width: 256
        }
      },
      {
        index: 1,
        prevColor: this.props.initialColors[1],
        isLocked: false,
        squareStyle: {
          backgroundColor: this.props.initialColors[1],
          height: 500,
          width: 256
        }
      },
      {
        index: 2,
        prevColor: this.props.initialColors[2],
        isLocked: false,
        squareStyle: {
          backgroundColor: this.props.initialColors[2],
          height: 500,
          width: 256
        }
      },
      {
        index: 3,
        prevColor: this.props.initialColors[3],
        isLocked: false,
        squareStyle: {
          backgroundColor: this.props.initialColors[3],
          height: 500,
          width: 256
        }
      }
    ]
  };

  //stack overflow: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.updateColorSquareDimensions();
  }
  //end of stack overflow

  //updates the width of each color square
  updateColorSquareDimensions() {
    const colorSquares = this.state.colorSquares;

    for (var i = 0; i < colorSquares.length; i++) {
      const squareStyle = { ...colorSquares[i].squareStyle };
      squareStyle.width = (window.innerWidth - 75) / colorSquares.length;
      squareStyle.height = window.innerHeight / 2;
      colorSquares[i].squareStyle = squareStyle;
    }

    document.getElementById("color-picker").style.left =
      (colorSquares[0].squareStyle.width / 2) * colorSquares.length -
      375 / 2 +
      "px";

    document.getElementById("color-picker").style.top =
      colorSquares[0].squareStyle.height / 2 - 270 / 2 + "px";

    this.setState({ colorSquares });
  }

  //updates state to remove color square at specified index
  addColorSquare = () => {
    const newColorSquare = {
      //updates the index accordingly
      index: this.state.colorSquares.length,
      prevColor: randomColor(),
      isLocked: false,
      squareStyle: {
        backgroundColor: randomColor(),
        height: 500,
        width: 256
      }
    };
    const colorSquares = this.state.colorSquares;
    colorSquares[colorSquares.length] = newColorSquare;
    this.updateColorSquareDimensions();
  };

  //updates state to remove color square at specified index
  onDelete = colorSquare => {
    const colorSquares = this.state.colorSquares;
    colorSquares.splice(colorSquare.index, 1);

    this.updateIndex(colorSquares);

    this.updateColorSquareDimensions();
  };

  //updates state to add color square at the end of the array
  handleLockPress = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    colorSquares[index].isLocked = !colorSquares[index].isLocked;
    this.setState({ colorSquares });
  };

  //makes the color picker component visible
  openColorPicker = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    const colorPickerState = this.state.colorPickerState;
    //sets color picker to visible
    colorPickerState.showColorPicker = true;
    colorPickerState.activeColorSquare = index;
    this.setState({ colorSquares });
    this.setState({ colorPickerState });
  };

  //reverts to original state and deletes the color changes
  onDecline = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    const colorPickerState = this.state.colorPickerState;
    colorPickerState.showColorPicker = false;

    //changes background color to previous color
    var squareStyle = { ...colorSquares[index].squareStyle };
    squareStyle.backgroundColor = colorSquares[index].prevColor;
    colorSquares[index].squareStyle = squareStyle;

    this.setState({ colorPickerState });
    this.setState({ colorSquares });
  };

  //changes state to store the new color and reverts to original state
  onAccept = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    const colorPickerState = this.state.colorPickerState;

    colorPickerState.showColorPicker = false;
    //changes previous color to new background color
    colorSquares[index].prevColor =
      colorSquares[index].squareStyle.backgroundColor;

    this.setState({ colorPickerState });
    this.setState({ colorSquares });
  };

  //updates color picker information when pointer is moved
  handleChange = (color, colorSquare) => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    var squareStyle = { ...colorSquares[index].squareStyle };

    squareStyle.backgroundColor = color.hex;
    colorSquares[index].squareStyle = squareStyle;

    this.setState({ colorSquares });
  };

  //randomizes colors of appropriate unlocked color squares
  randomizeColors = () => {
    const colorSquares = this.state.colorSquares;
    for (var i = 0; i < colorSquares.length; i++) {
      if (!colorSquares[i].isLocked) {
        var squareStyle = { ...colorSquares[i].squareStyle };
        var newColor = randomColor();

        squareStyle.backgroundColor = newColor;
        colorSquares[i].squareStyle = squareStyle;
      }
      colorSquares[i].prevColor = newColor;
    }
    this.setState({ colorSquares });
  };

  //updates the indexes accordingly
  updateIndex = colorSquares => {
    for (var i = 0; i < colorSquares.length; i++) {
      colorSquares[i].index = i;
    }
  };

  swapSquares = (colorSquare, direction) => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquare.index;

    var newIndex = index - 1;
    if (direction === "right") {
      newIndex += 2;
    }

    var temp = colorSquares[index];
    colorSquares[index] = colorSquares[newIndex];
    colorSquares[newIndex] = temp;

    this.updateIndex(colorSquares);

    this.setState({ colorSquares });
  };

  render() {
    return (
      <div>
        <div>
          <div class="left-float">
            {this.state.colorSquares.map(colorSquare => (
              <ColorSquare
                key={colorSquare.id}
                colorSquare={colorSquare}
                openColorPicker={this.openColorPicker}
                handleLockPress={this.handleLockPress}
                onDelete={this.onDelete}
                gridLength={this.state.colorSquares.length}
                swapSquares={this.swapSquares}
              />
            ))}
          </div>
          <div id="color-picker" class="color-picker">
            {this.state.colorPickerState.showColorPicker && (
              <CustomColorPicker
                colorSquare={
                  this.state.colorSquares[
                    this.state.colorPickerState.activeColorSquare
                  ]
                }
                onAccept={this.onAccept}
                onDecline={this.onDecline}
                handleChange={this.handleChange}
              ></CustomColorPicker>
            )}
          </div>
        </div>
        <img
          src={addBtnImage}
          alt="add color square"
          class="add-button"
          onClick={this.addColorSquare}
        ></img>
        <button class="random-button" onClick={this.randomizeColors}>
          randomize
        </button>
      </div>
    );
  }
}

export default ColorGrid;

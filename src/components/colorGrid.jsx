import React, { Component } from "react";
import ColorSquare from "./colorSquare";
import randomColor from "randomcolor";
//buttons
import addBtnImage from "./images/addButton.png";
import "./gridStyling.css";

class ColorGrid extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  state = {
    colorSquares: [
      {
        index: 0,
        showPicker: false,
        showAcceptDecline: false,
        prevColor: randomColor(),
        isLocked: false,
        squareStyle: {
          backgroundColor: randomColor(),
          height: 500,
          width: 256
        }
      },
      {
        index: 1,
        showPicker: false,
        showAcceptDecline: false,
        prevColor: randomColor(),
        isLocked: false,
        squareStyle: {
          backgroundColor: randomColor(),
          height: 500,
          width: 256
        }
      },
      {
        index: 2,
        showPicker: false,
        showAcceptDecline: false,
        prevColor: randomColor(),
        isLocked: false,
        squareStyle: {
          backgroundColor: randomColor(),
          height: 500,
          width: 256
        }
      },
      {
        index: 3,
        showPicker: false,
        showAcceptDecline: false,
        prevColor: randomColor(),
        isLocked: false,
        squareStyle: {
          backgroundColor: randomColor(),
          height: 500,
          width: 256
        }
      }
    ]
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.updateColorSquareWidth();
  }

  updateColorSquareWidth() {
    const colorSquares = this.state.colorSquares;

    for (var i = 0; i < colorSquares.length; i++) {
      const squareStyle = { ...colorSquares[i].squareStyle };
      squareStyle.width = (window.innerWidth - 75) / colorSquares.length;
      colorSquares[i].squareStyle = squareStyle;
    }
    this.setState({ colorSquares });
  }

  addColorSquare = () => {
    const newColorSquare = {
      index: this.state.colorSquares.length,
      showPicker: false,
      showAcceptDecline: false,
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
    this.updateColorSquareWidth();
  };

  onDelete = colorSquare => {
    const colorSquares = this.state.colorSquares;
    colorSquares.splice(colorSquare.index, 1);

    for (var i = 0; i < colorSquares.length; i++) {
      colorSquares[i].index = i;
    }

    this.updateColorSquareWidth();
  };

  handleLockPress = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    colorSquares[index].isLocked = !colorSquares[index].isLocked;
    this.setState({ colorSquares });
  };

  openColorPicker = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    colorSquares[index].showPicker = true;
    colorSquares[index].prevColor =
      colorSquares[index].squareStyle.backgroundColor;
    colorSquares[index].showAcceptDecline = true;
    this.setState({ colorSquares });
  };

  onDecline = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    colorSquares[index].showPicker = false;
    colorSquares[index].showAcceptDecline = false;
    //changing the styling
    var squareStyle = { ...colorSquares[index].squareStyle };
    squareStyle.backgroundColor = colorSquares[index].prevColor;
    colorSquares[index].squareStyle = squareStyle;
    this.setState({ colorSquares });
  };

  onAccept = colorSquare => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    colorSquares[index].showPicker = false;
    colorSquares[index].showAcceptDecline = false;
    this.setState({ colorSquares });
  };

  handleChange = (color, colorSquare) => {
    const colorSquares = this.state.colorSquares;
    const index = colorSquares.indexOf(colorSquare);
    var squareStyle = { ...colorSquares[index].squareStyle };
    squareStyle.backgroundColor = color.hex;
    colorSquares[index].squareStyle = squareStyle;
    this.setState({ colorSquares });
  };

  randomizeColors = () => {
    const colorSquares = this.state.colorSquares;
    for (var i = 0; i < colorSquares.length; i++) {
      if (!colorSquares[i].isLocked) {
        var squareStyle = { ...colorSquares[i].squareStyle };
        squareStyle.backgroundColor = randomColor();
        colorSquares[i].squareStyle = squareStyle;
      }
    }
    this.setState({ colorSquares });
  };

  render() {
    return (
      <div>
        <div class="left-float">
          {this.state.colorSquares.map(colorSquare => (
            <ColorSquare
              key={colorSquare.id}
              colorSquare={colorSquare}
              openColorPicker={this.openColorPicker}
              onAccept={this.onAccept}
              onDecline={this.onDecline}
              handleChange={this.handleChange}
              handleLockPress={this.handleLockPress}
              onDelete={this.onDelete}
            />
          ))}
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

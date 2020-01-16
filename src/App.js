import React from "react";
import ColorGrid from "./components/colorGrid";
//import CustomColorPicker from "./components/customColorPicker";
import { Helmet } from "react-helmet";
import randomColor from "randomcolor";
import "./App.css";

function App() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #353638; }"}</style>
      </Helmet>
      <ColorGrid
        initialColors={[
          randomColor(),
          randomColor(),
          randomColor(),
          randomColor()
        ]}
      ></ColorGrid>
    </div>
  );
}

export default App;

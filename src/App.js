import React from "react";
import ColorGrid from "./components/colorGrid";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #2f2f32; }"}</style>
      </Helmet>
      <ColorGrid></ColorGrid>
    </div>
  );
}

export default App;

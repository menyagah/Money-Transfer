import React from "react";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Grid/>
    </div>
  );
}

export default App;

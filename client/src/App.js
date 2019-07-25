import React from "react";
import "./App.css";
import MissionList from "./views/MissionList";

function App() {
  return (
    <div className="App">
      <button>Get Space X missions</button>
      <MissionList />
    </div>
  );
}

export default App;

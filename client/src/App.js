import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMissions } from "./actions";
import { css } from "@emotion/core";

import "./App.css";

import MissionList from "./views/MissionList";
import NavBar from "./components/NavBar";

const App = ({ state, getMissions }) => {

  useEffect(() => getMissions(), [])
  return (
    <div className="App">
      <NavBar />
      <h1>SPACE X MISSIONS</h1>

      {/* <button onClick={getMissions}>Get Space X missions</button> */}
      <MissionList />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { getMissions }
)(App);

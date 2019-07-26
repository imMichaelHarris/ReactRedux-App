import React from "react";
import { connect } from "react-redux";
import { getMissions } from "./actions";
import { css } from "@emotion/core";

import "./App.css";

import MissionList from "./views/MissionList";
import NavBar from "./components/NavBar";

const App = ({ state, getMissions }) => {
  return (
    <div className="App">
      <button onClick={getMissions}>Get Space X missions</button>
      <NavBar />
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

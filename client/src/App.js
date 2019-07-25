import React from "react";
import { connect } from "react-redux";
import { getMissions } from "./actions";
import "./App.css";
import MissionList from "./views/MissionList";

const App = ({ state, getMissions }) => {
  return (
    <div className="App">
      <button onClick={getMissions}>Get Space X missions</button>
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

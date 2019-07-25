import React from "react";
import { connect } from "react-redux";
import "./App.css";
import MissionList from "./views/MissionList";

const App = () => {
  return (
    <div className="App">
      <button>Get Space X missions</button>
      <MissionList />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(App);

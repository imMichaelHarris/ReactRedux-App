import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMissions } from "./actions";

import "./App.css";

import MissionList from "./views/MissionList";
import NavBar from "./components/NavBar";

const App = ({ state, getMissions }) => {
  const [filtered, setFiltered] = useState([]);
  useEffect(() => getMissions(), []);
  useEffect(() => setFiltered(state.missions), [state.missions]);

  const filterMissions = input => {
    setFiltered(
      filtered.filter(mission => {
        if (
          mission.mission_name.includes(input) ||
          mission.manufacturers.includes(input) ||
          mission.mission_ids.includes(input)
        ) {
          return mission;
        }
      })
    );
  };

  return (
    <div className="App">
      <NavBar filterMissions={filterMissions} />
      <h1>SPACE-X MISSIONS</h1>

      {/* <button onClick={getMissions}>Get Space X missions</button> */}
      <MissionList missions={filtered} />
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

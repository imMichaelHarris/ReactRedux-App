import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

import Mission from '../components/Mission'

const MissionList = () => {
  const state = useSelector(state => state);
  return (
    <div>
      <RingLoader
        sizeUnit={"px"}
        size={100}
        color={"#123abc"}
        loading={state.loading}
      />
      {state.missions.map(mission => (
        <Mission key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionList;

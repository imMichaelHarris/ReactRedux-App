import React from "react";
import { useSelector } from "react-redux";
import { CircleLoader } from "react-spinners";

import Mission from '../components/Mission'

const MissionList = () => {
  const state = useSelector(state => state);
  return (
    <div>
      <CircleLoader
        sizeUnit={"px"}
        size={150}
        color={"#123abc"}
        loading={state.loading}
      />
      mission list
      {state.missions.map(mission => (
        <Mission key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
};

export default MissionList;

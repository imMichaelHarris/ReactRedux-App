import React from "react";

const Mission = ({ mission }) => {
  const { mission_name } = mission;
  return (
    <div>
      <header>
        <h2>{mission_name}</h2>
      </header>
    </div>
  );
};

export default Mission;

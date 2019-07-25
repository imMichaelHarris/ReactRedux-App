import React, { useState } from "react";
import Description from "./Description";

const Mission = ({ mission }) => {
  const { mission_name } = mission;
  const [show, setShow] = useState();
  return (
    <div>
      <header>
        <h2>{mission_name}</h2>

      </header>
      <button onClick={() => setShow(!show)}>Show more</button>
      {show && <Description description={mission.description} />}
    </div>
  );
};

export default Mission;

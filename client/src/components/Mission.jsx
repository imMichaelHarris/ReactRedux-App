import React, { useState } from "react";

const Mission = ({ mission }) => {
  const { mission_name } = mission;
  const [show, setShow] = useState()
  return (
    <div>
      <header>
        <h2>{mission_name}</h2>
      </header>
    </div>
  );
};

export default Mission;

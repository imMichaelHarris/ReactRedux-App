import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import Grid from "@material-ui/core/Grid";
import Mission from "../components/Mission";

const MissionList = () => {
  const state = useSelector(state => state);
  return (
    <div className="container">
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <RingLoader
          sizeUnit={"px"}
          size={80}
          color={"#1A2059"}
          loading={state.loading}
        />
        {state.missions.map(mission => (
          <Grid
            container
            justify="center"
            item
            xs={10}
            sm={6}
            md={4}
            key={mission.mission_id}
          >
            <Mission mission={mission} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MissionList;

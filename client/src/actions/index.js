import axios from "axios";

export const GET_MISSIONS_START = "GET_MISSIONS_START";
export const GET_MISSIONS_SUCCESS = "GET_MISSIONS_SUCCESS";
export const GET_MISSIONS_FAILED = "GET_MISSIONS_FAILED";

export const getMissions = () => dispatch => {
  dispatch({ type: GET_MISSIONS_START });
  axios
    .get("https://api.spacexdata.com/v3/missions")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.response);
    });
};

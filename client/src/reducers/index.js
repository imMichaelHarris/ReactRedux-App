import {
  GET_MISSIONS_START,
  GET_MISSIONS_SUCCESS,
  GET_MISSIONS_FAILED
} from "../actions";

const initialState = {
  test: "test"
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

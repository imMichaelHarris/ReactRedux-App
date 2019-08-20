import {
  GET_MISSIONS_START,
  GET_MISSIONS_SUCCESS,
  GET_MISSIONS_FAILED
} from "../actions";

const initialState = {
  loading: false,
  error: "",
  missions: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MISSIONS_START:
      return {
        ...state,
        error: "",
        loading: true
      };
    case GET_MISSIONS_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        missions: payload
      };
    default:
      return state;
  }
};

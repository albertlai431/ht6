import axios from "axios";
import { GET_ERRORS } from "./types";

// Register user with data from /form
export const signup = (data, history) => dispatch => {
  axios
    .post("/signup", data)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Create collision report from /collision
export const collisioncreate = (data, history) => dispatch => {
  axios
    .post("/collision", data)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Images
export const imageExport = img => dispatch => {
  axios
    .post("/images", img)
    .then(res => console.log("success"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

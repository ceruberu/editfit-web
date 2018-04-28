import axios from "axios";
import { REQUEST_USER_SIGNIN, FAIL_USER_SIGNIN, SUCCESS_USER_SIGNIN, USER_SIGNOUT } from "./index";

export const requestUserSignin = () => ({
  type: REQUEST_USER_SIGNIN
});

export const successUserSignin = user => ({
  type: SUCCESS_USER_SIGNIN,
  user
});

export const failUserSignin = err => ({
  type: FAIL_USER_SIGNIN,
  error: err
});

export const userSignin = user => dispatch => {
  dispatch(requestUserSignin);
  return axios.post("/users/signin", user)
    .then(response => {
      localStorage.setItem("token", response.token);
      successUserSignin(response.user);
    })
    .catch(err => failUserSignin(err));
};

export const userSignout = () => ({
  type: USER_SIGNOUT
});
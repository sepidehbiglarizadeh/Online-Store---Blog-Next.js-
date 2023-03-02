import http from "@/services/httpService";
import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from "./userTypes";

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const signinUserSuccess = (user) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user,
  };
};

export const signinUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const signupUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST,
  };
};

export const signupUserSuccess = (user) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user,
  };
};

export const signupUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};

//? we dispatch the appropiate actions :
export const userSignin = (data) => {
  //? recieves the dispach method as arguments
  return (dispatch) => {
    dispatch(signinUserRequest());
    http
      .post("/user/signin", data)
      .then((response) => {
        dispatch(signinUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(signinUserFailure(error.message));
      });
  };
};

export const userSignup = (data) => {
  return (dispatch) => {
    dispatch(signupUserRequest());
    http
      .post("/user/signup", data)
      .then((response) => {
        dispatch(signupUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(signupUserFailure(error.message));
      });
  };
};

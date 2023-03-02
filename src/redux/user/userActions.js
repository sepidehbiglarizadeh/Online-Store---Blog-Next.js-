import http from "@/services/httpService";
import { toast } from "react-hot-toast";
import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNOUT_USER,
} from "./userTypes";
import Router from "next/router";

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
        toast.success("با موفقیت وارد شدید");
        dispatch(signinUserSuccess(response.data));
        Router.push("/");
      })
      .catch((error) => {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch(signinUserFailure(errorMessage));
        toast.error(errorMessage);
      });
  };
};

export const userSignup = (data) => {
  return (dispatch) => {
    dispatch(signupUserRequest());
    http
      .post("/user/signup", data)
      .then((response) => {
        toast.success("ثبت نام با موفقیت انجام شد");
        dispatch(signupUserSuccess(response.data));
        dispatch(signinUserSuccess(response.data));
        Router.push("/");
      })
      .catch((error) => {
        const errorMessage =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch(signupUserFailure(errorMessage));
        toast.error(error.message);
      });
  };
};

export const signOut = () => (dispatch) => {
  dispatch({ type: SIGNOUT_USER });
  // REMOVE USER DATA FROM LOCALSTORAGE
  http
    .get("/user/logout")
    .then(({ data }) => {
      window.location.href = "/";
    })
    .catch();
};

export const loadUserData = (store) => {
  http
    .get("/user/load")
    .then(({ data }) => {
      store.dispatch(signinUserSuccess(data));
    })
    .catch((err) => {});
};

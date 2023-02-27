import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN_PENDING": {
      return { user: null, loading: true, error: false };
    }
    case "SIGNIN_SUCCESS": {
      return { loading: false, user: action.payload, error: null };
    }
    case "SIGNIN_REJECT": {
      return { error: action.error, loading: false, user: null };
    }
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    (action) => {
      //? loading
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("با موفقیت وارد شدید");
          // * success
          dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
          Router.push("/");
        })
        .catch((err) => {
          // ! reject
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message, {});
        });
    },
  SIGNUP:
    ({ dispatch }) =>
    (action) => {
      //? loading
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .post("http://localhost:5000/api/user/signup", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("ثبت نام با موفقیت انجام شد");
          // * success
          dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
          Router.push("/");
        })
        .catch((err) => {
          // ! reject
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
          toast.error(err?.response?.data?.message, {});
        });
    },
  LOAD_USER:
    ({ dispatch }) =>
    (action) => {
      //? loading
      dispatch({ type: "SIGNIN_PENDING" });
      axios
        .get("http://localhost:5000/api/user/load", {
          withCredentials: true,
        })
        .then((res) => {
          // * success
          dispatch({ type: "SIGNIN_SUCCESS", payload: res.data });
        })
        .catch((err) => {
          // ! reject
          dispatch({
            type: "SIGNIN_REJECT",
            error: err?.response?.data?.message,
          });
        });
    },
  SIGNOUT:
    ({ dispatch }) =>
    (action) => {
      //? loading
      axios
        .get("http://localhost:5000/api/user/logout", {
          withCredentials: true,
        })
        .then((res) => {
          dispatch({ type: "SIGNIN_PENDING" });
          Router.push("/");
        })
        .catch();
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(() => {
    dispatch({ type: "LOAD_USER" });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);

// use one of these 2 hooks for async request in context:
// 1. useReducerAsync or 2. react-hook-thunk-reducer
// useReducerAsync is more easier than react-hook-thunk-reducer

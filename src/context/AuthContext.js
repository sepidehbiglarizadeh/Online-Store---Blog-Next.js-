import axios from "axios";
import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "signin": {
      axios
        .post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("با موفقیت وارد شدید");
        })
        .catch((err) => toast.error(err?.response?.data?.message, {}));
    }
    default:
      return { ...state };
  }
};
const asyncActionHandlers = {};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

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

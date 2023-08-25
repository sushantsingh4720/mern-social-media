import { createContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const INITIAL_STATE = { currentUser: {} };
  const authReducer = (state, action) => {
    switch (action.type) {
      case "USER_REQUEST":
        return {
          loading: true,
        };
      case "USER_SUCCESS":
        return {
          ...state,
          loading: false,
          currentUser: action.payload,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "USER_SUCCESS", payload: user });
    });
    return () => {
      dispatch({ type: "USER_REQUEST" });
      unSub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};

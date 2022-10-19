import { createContext, useEffect, useState } from "react";
import axios from "axios";

// CREATE CONTEXT
export const AuthContext = createContext();

// CREATE PROVIDER
export const AuthContextProvider = ({ children }) => {
  // CONTEXT STATES
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  // CONTEXT FUNCTIONS
  const login = async (userData) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      userData
    );
    setCurrentUser(res.data);
  };

  const logout = async () => {
    const res = await axios.post("http://localhost:8800/api/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  // CONTEXT STATES AND FUNCTIONS EXPORT
  const values = {
    currentUser,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
  const [token, setToken] = useState("no token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage?.getItem("token");
    const user = JSON.parse(localStorage?.getItem("user"));
    setToken(token);
    setUser(user);
  }, [])

const isUserLogedIn = !!token
const userRole = user?.role


  const logoutHandler = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const authContext = {
    token,
    user,
    isUserLogedIn,
    loginHandler,
    logoutHandler,
    userRole
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};


export default AuthContextProvider
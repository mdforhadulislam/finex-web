import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
  const [token, setToken] = useState("no token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage?.getItem("finex-token");
    const user = JSON.parse(localStorage?.getItem("finex-user"));
    setToken(token);
    setUser(user);
  }, [])

const isUserLogedIn = !!token
const userRole = user?.role


  const logoutHandler = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("finex-token");
    localStorage.removeItem("finex-user");
  };

  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);

    localStorage.setItem("finex-token", token);
    localStorage.setItem("finex-user", JSON.stringify(user));
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
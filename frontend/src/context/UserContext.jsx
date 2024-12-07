import { createContext } from "react";

import { useAuth } from "../hooks/useAuth";

export const Context = createContext();

export const UserProvider = ({ children }) => {
  const { register, login, authenticated, loading, logout } = useAuth();

  return (
    <Context.Provider
      value={{ register, login, authenticated, loading, logout }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

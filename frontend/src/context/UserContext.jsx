import { createContext } from "react";

import { useAuth } from "../hooks/useAuth";

const Context = createContext();

export const UserProvider = ({ children }) => {
  const { register, login } = useAuth();

  return (
    <Context.Provider value={{ register, login }}>{children}</Context.Provider>
  );
};

export default Context;

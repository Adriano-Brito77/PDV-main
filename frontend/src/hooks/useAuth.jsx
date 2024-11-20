import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseFlashMessage from "./useFlashMessage";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();
  const { setFlashMessage } = UseFlashMessage();

  const register = async (user) => {
    let msgText = "Cadastro realizado com suecesso";
    let msgType = "sucess";

    try {
      const data = await api.post("/users/register", user).then((response) => {
        return response.data;
      });
    } catch (error) {
      msgText = error.response.data.message;
      msgType = "error";
    }
    setFlashMessage(msgText, msgType);
    history("/");
  };
  const login = async (user) => {
    let msgText = "Login realizado com sucesso!";
    let msgType = "success";

    try {
      const data = await api.post("/users/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
      console.log(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = error;
    }
    setFlashMessage(msgText, msgType);
  };
  const authUser = async (data) => {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    history("/sale");
  };

  return { register, login };
};

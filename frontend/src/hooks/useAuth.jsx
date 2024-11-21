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
    let msgText = "Cadastro realizado com sucesso";
    let msgtype = "sucess";

    try {
      const data = await api.post("/users/register", user).then((response) => {
        return response.data;
      });

      await pagepush();
    } catch (error) {
      msgText = error.response.data.message;
      msgtype = "error";
    }
    setFlashMessage(msgText, msgtype);
  };
  const login = async (user) => {
    let msgText = "Login realizado com sucesso!";
    let msgtype = "sucess";

    try {
      const data = await api.post("/users/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
      console.log(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgtype = error;
    }
    setFlashMessage(msgText, msgtype);
  };
  const authUser = async (data) => {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    history("/sale");
  };
  const pagepush = async () => {
    history("/");
  };

  return { register, login };
};

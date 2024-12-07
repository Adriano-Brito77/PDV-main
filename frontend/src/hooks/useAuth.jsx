import api from "../utils/api";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseFlashMessage from "./useFlashMessage";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();
  const navigate = useNavigate();
  const { setFlashMessage } = UseFlashMessage();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const register = async (user) => {
    let msgText = "Cadastro realizado com sucesso";
    let msgtype = "sucess";
    let background = "white";

    try {
      const data = await api.post("/users/register", user).then((response) => {
        return response.data;
      });

      await pagepush();
    } catch (error) {
      msgText = error.response.data.message;
      msgtype = "error";
      background = "white";
    }
    setFlashMessage(msgText, msgtype, background);
  };
  const login = async (user) => {
    let msgText = "Login realizado com sucesso!";
    let msgtype = "sucess";
    let background = "indigo";

    try {
      const data = await api.post("/users/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgtype = "error";
      background = "white";
      setFlashMessage(msgText, msgtype, background);
    }
    setFlashMessage(msgText, msgtype, background);
  };
  const authUser = async (data) => {
    setAuthenticated(true);
    localStorage.setItem("token", JSON.stringify(data.token));
    history("/sale");
  };
  const pagepush = async () => {
    history("/");
  };
  const logout = async () => {
    setAuthenticated(false);
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = undefined;
    window.location.replace("/");
  };
  return { register, login, authenticated, loading, logout };
};

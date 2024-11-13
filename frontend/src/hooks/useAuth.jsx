import api from "../utils/api";

import UseFlashMessage from "./useFlashMessage";

export const useAuth = () => {
  const register = async (user) => {
    let msgText = "Cadastro realizado com suecesso";
    let msgtype = "sucess";

    const { setFlashMessage } = UseFlashMessage();

    try {
      const data = await api.post("/users/register", user).then((response) => {
        return response.data;
      });

      console.log(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgtype = "error";
    }
    setFlashMessage(msgText, msgtype);
  };

  return { register };
};

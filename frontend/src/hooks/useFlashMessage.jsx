import bus from "../utils/bus";

const UseFlashMessage = () => {
  const setFlashMessage = (msg, type) => {
    bus.emit("flash", {
      message: msg,
      type: type,
    });
  };
  return { setFlashMessage };
};

export default UseFlashMessage;

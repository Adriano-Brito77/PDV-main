import bus from "../utils/bus";

const UseFlashMessage = () => {
  const setFlashMessage = (msg, type, background) => {
    bus.emit("flash", {
      message: msg,
      type: type,
      background: background

    });
  };
  return { setFlashMessage };
};

export default UseFlashMessage;

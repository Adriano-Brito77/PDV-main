import styles from "./Message.module.css";

import { useState, useEffect } from "react";
import bus from "../../utils/bus";

const Message = () => {
  const [visibility, setVisibility] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [background, setbackground] = useState('')

  useEffect(() => {
    bus.addListener("flash", ({ message, type, background }) => {
      setVisibility(true);
      setMessage(message);
      setType(type);
      setbackground(background)

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    });
  }, []);

  return (
    <div className={`${styles[background]}`}>{visibility && (
      <div className={`${styles.message} ${styles[type]}`}>{message}</div>
)}</div>
  );
};

export default Message;

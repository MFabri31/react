import React, { useState, useEffect } from "react";

const Clock = ({ hour }) => {
  return <h3>{hour}</h3>;
};

const ClockHook = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (visible) {
      timer = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      console.log("Fase de desmontaje ");
      clearInterval(timer);
    };
  }, [visible]);

  return (
    <>
      <h3>Reloj con hooks</h3>
      {visible && <Clock hour={hour} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </>
  );
};

export default ClockHook;

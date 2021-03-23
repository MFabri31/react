import React, { useState, useEffect } from "react";

const ScrollHook = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moviendo el scroll");
    const detectScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectScroll);

    return () => {
      window.removeEventListener("scroll", detectScroll);
      console.log("Fase de desmontaje ");
    };
  }, [scrollY]);

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    console.log("Fase de actualización");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje ");
    };
  });

  return (
    <>
      <h3>Hooks - useEffect y el ciclo de vida</h3>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
};

export default ScrollHook;

import React, { useRef } from "react";

const References = () => {
  let refMenu = useRef(),
    refMenuBtn = useRef();

  // console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    // const $menu = document.getElementById("menu");
    // if (e.target.textContet === "Menu") {
    //   e.target.textContet = "Cerar";
    //   $menu.style.display = "block";
    // } else {
    //   e.target.textContet = "Menu";
    //   $menu.style.display = "none";
    // }

    if (refMenuBtn.current.textContet === "Menu") {
      refMenuBtn.current.textContet = "Cerar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContet = "Menu";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h3>Referencias</h3>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Menu
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a href="#">Sección 1</a>
        <br />
        <a href="#">Sección 2</a>
        <br />
        <a href="#">Sección 3</a>
        <br />
        <a href="#">Sección 4</a>
        <br />
        <a href="#">Sección 5</a>
        <br />
      </nav>
    </>
  );
};

export default References;

import React, { useState } from "react";

// const Forms = () => {
//   const [name, setName] = useState("");
//   const [taste, setTaste] = useState("");
//   const [languaje, setLanguaje] = useState("");
//   const [terms, setTerms] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Formulario Enviado");
//   };

//   return (
//     <>
//       <h3>Formularios</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Nombre</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <p>Elije su sabor Js favorito</p>
//         <div>
//           <label htmlFor="react">React</label>
//           <input
//             type="radio"
//             name="taste"
//             id="react"
//             value="react"
//             onChange={(e) => setTaste(e.target.value)}
//             defaultChecked
//           />
//         </div>
//         <div>
//           <label htmlFor="angular">Angular</label>
//           <input
//             type="radio"
//             name="taste"
//             id="angular"
//             value="angular"
//             onChange={(e) => setTaste(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="vue">Vue</label>
//           <input
//             type="radio"
//             name="taste"
//             id="vue"
//             value="vue"
//             onChange={(e) => setTaste(e.target.value)}
//           />
//         </div>
//         <div>
//           <p>Elije tu lenguaje de programación favorito</p>
//           <select
//             name="languaje"
//             onChange={(e) => setLanguaje(e.target.value)}
//             defaultValue=""
//           >
//             <option value="">---</option>
//             <option value="js">Javascript</option>
//             <option value="php">PHP</option>
//             <option value="py">Python</option>
//             <option value="go">Go</option>
//             <option value="rb">Ruby</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="terms">Acepto términos y condiciones</label>
//           <input
//             type="checkbox"
//             name="terms"
//             id="terms"
//             onChange={(e) => setTerms(e.target.checked)}
//           />
//         </div>
//         <input type="submit" value="Enviar" />
//       </form>
//     </>
//   );
// };

const Forms = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario Enviado");
  };

  return (
    <>
      <h3>Formulario</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value="name"
            onChange={handleChange}
          />
        </div>
        <legend>Elije su sabor js favorito</legend>
        <div>
          <label htmlFor="react">React</label>
          <input
            type="radio"
            name="taste"
            id="react"
            value="react"
            onChange={handleChange}
            defaultChecked
          />
        </div>
        <div>
          <label htmlFor="angular">Angular</label>
          <input
            type="radio"
            name="taste"
            id="angular"
            value="angular"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="vue">Vue</label>
          <input
            type="radio"
            name="taste"
            id="vue"
            value="vue"
            onChange={handleChange}
          />
        </div>
        <div>
          <legend>Elije tu lenguaje de programación favorito</legend>
          <select name="languaje" onChange={handleChange} defaultValue="">
            <option value="">---</option>
            <option value="js">Javascript</option>
            <option value="php">PHP</option>
            <option value="py">Python</option>
            <option value="go">Go</option>
            <option value="rb">Ruby</option>
          </select>
        </div>
        <div>
          <label htmlFor="terms">Acepto términos y condiciones</label>
          <input
            type="checkbox"
            name="terms"
            id="terms"
            onChange={handleChecked}
          />
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Forms;

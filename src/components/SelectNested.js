import React, { useState } from "react";
import { useSelectFetch } from "../Hooks/useSelectFetch";

const SelectList = ({ title, url, handleChange }) => {
  const { data, error, loading } = useSelectFetch(url);

  if (!data) return null;
  if (error) return <div>Error...</div>;

  let id = `select-${title}`,
    label = title.charAt(0).toUpperCase() + title.slice(1),
    options = data.response[title]; // guarda dinamicamente los datos de los estados
  console.log(options);

  return (
    <>
      {loading && <p>Cargando...</p>}
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elije un {title}</option>
        {data && options.map((el) => <option value={el}>{el}</option>)}
      </select>
    </>
  );
};

const SelectNested = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "d81a7ac7-976d-4e1e-b7d3-b1979d791b6c";

  console.log(state);

  return (
    <div>
      <h3>Selects Anidados</h3>
      <h4>México</h4>
      <SelectList
        title="estado"
        url={`https://api-sepomex.hckdrk.mx/query/get_estados?token=${TOKEN}`}
        handleChange={(e) => setState(e.target.value)}
      />
      {state && (
        <SelectList
          title="municipios"
          url={`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          handleChange={(e) => setTown(e.target.value)}
        />
      )}
      {town && (
        <SelectList
          title="colonia"
          url={`https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={(e) => setSuburb(e.target.value)}
        />
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectNested;

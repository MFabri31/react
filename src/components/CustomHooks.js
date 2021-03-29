import React from "react";
import { useFetch } from "../Hooks/useFetch";

const CustomHooks = () => {
  // console.log(useFetch);
  let url = "https://jsonplaceholder.typicode.com/users";
  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <h3>Custom Hooks</h3>
      <h4>{JSON.stringify(isPending)}</h4>
      <h4>
        <mark>{JSON.stringify(error)}</mark>
      </h4>
      <h4>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h4>
    </>
  );
};

export default CustomHooks;

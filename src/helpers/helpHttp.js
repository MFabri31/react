export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal; // agrega el objeto controller y la propiedad signal.

    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers } // crea un nuevo objeto con las cabeceras por defecto y las opciones del usuario.
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;
    // console.log(options);

    setTimeout(() => controller.abort(), 2000); // si no se recibe respuesta del servidor, se cancela la petición fetch.

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err); // retorna una promesa
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return {
    get, // patrón bajo closures -> retorna un objeto con los métodos
    post,
    put,
    del,
  };
};

/*
object new AbortController -> permite cancelar la petición.

Al realizar una petición GET, no se necesita enviar un body salvo en ciertas ocaciones. 
No se puede enviar dentro del objeto de opciones de la petición fetch, un body vació o falso

*/

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const datosJSON = await resp.json();
      const facturasIngreso = datosJSON.filter(datos => datos.tipo === "ingreso");
      setDatos(facturasIngreso);
    })();
  }, [url]);
  return datos;
};
export default useFetch;

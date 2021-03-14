import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const datosJSON = await resp.json();
      setDatos(datosJSON);
      setCargando(false);
    })();
  }, [url]);
  return {
    datos,
    cargando
  };
};
export default useFetch;

import { useEffect, useState } from "react";

const UrlAPI = (url) => {
  const [web, setWeb] = useState(null);
  useEffect(() => {
    (async () => {
      const envio = await fetch(url);
      const datosJSON = await envio.json();
      setWeb(datosJSON);
    })();
  },
    [url]);
  return { web };
};
export default UrlAPI;

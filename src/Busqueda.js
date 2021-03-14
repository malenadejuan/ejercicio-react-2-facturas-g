import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const Busqueda = ({ facturas, setResultados }) => {
  const [busqueda, setBusqueda] = useState("");

  const cambiarBusqueda = e => {
    setBusqueda(e.target.value);
  };

  useEffect(() => {
    const resultadoFinal = facturas.filter(factura => factura.numero.includes(busqueda));
    resultadoFinal.length > 0 && setResultados(resultadoFinal);
  }, [busqueda, facturas, setResultados]);

  return (
    < div class="row" >
      <div className="info-listado info-listado-top col text-right">
        <label>
          Buscar
           <input type="text" class="form-control form-control-sm" value={busqueda} onChange={cambiarBusqueda} />
        </label>
      </div>
    </div>
  );
};

Busqueda.propTypes = {
  facturas: PropTypes.array.isRequired,
  resultados: PropTypes.array,
  setResultados: PropTypes.func.isRequired
};

export default Busqueda;




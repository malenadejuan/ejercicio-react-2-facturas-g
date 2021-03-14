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
    < Row >
      <Col className="info-listado info-listado-top text-right">
        <form>
          <label htmlFor="busqueda" >Buscar</label>
          <input id="busqueda" type="text" value={busqueda} onChange={cambiarBusqueda} />
        </form>
      </Col>
    </Row >
  );
};

Busqueda.propTypes = {
  facturas: PropTypes.array.isRequired,
  resultados: PropTypes.array,
  setResultados: PropTypes.func.isRequired
};

export default Busqueda;




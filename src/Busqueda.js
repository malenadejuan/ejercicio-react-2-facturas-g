import PropTypes from "prop-types";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Busqueda = ({ facturas, setResultados }) => {
  const [busqueda, setBusqueda] = useState("");

  const cambiarBusqueda = e => {
    setBusqueda(e.target.value);
  };

  const buscar = e => {
    e.preventDefault();
    const resultadoFinal = facturas.filter(factura => factura.numero.includes(busqueda));
    resultadoFinal.length > 0 && setResultados(resultadoFinal);
  };

  return (
    < Row >
      <Col className="info-listado info-listado-top text-right">
        <form onSubmit={buscar}>
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




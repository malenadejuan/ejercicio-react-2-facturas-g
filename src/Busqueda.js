import PropTypes from "prop-types";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Busqueda = ({ facturas }) => {
  const [busqueda, setBusqueda] = useState("");
  const [facturasFiltradas, setFacturasFiltradas] = useState([]);

  const cambiarBusqueda = e => {
    setBusqueda(e.target.value);
  };

  const buscar = e => {
    e.preventDefault();
    console.log(facturas);
  };

  return (
    <Row>
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
  facturas: PropTypes.array.isRequired
};

export default Busqueda;




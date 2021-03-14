import { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const cambiarBusqueda = () => {
    setBusqueda(busqueda);
  };

  return (
    <Row>
      <Col className="info-listado info-listado-top text-right">
        <form>
          <label htmlFor="busqueda" >Buscar</label>
          <input id="busqueda" type="text" value={busqueda} onChange={cambiarBusqueda} />
        </form>
      </Col>
    </Row>
  );
};

export default Busqueda;


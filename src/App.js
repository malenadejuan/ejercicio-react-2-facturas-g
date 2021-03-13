import Busqueda from "./Busqueda";
import Filas from "./Filas";
import CuentaFinalTotal from "./CuentaFinalTotal";
import { useEffect, useState } from "react";
import UrlAPI from "./UrlAPI";
import { Container, Row, Col, Table } from "react-bootstrap";

function App() {
  const [facturas, setFacturas] = useState([]);
  const { url: webAPI } = UrlAPI(`${process.env.REACT_APP_API_URL}`);
  useEffect(() => {
    if (webAPI) {
      setFacturas(webAPI.filter(webAPI => webAPI.tipo === "ingreso"));
    }
  }, [webAPI]);
  return (
    <Container as="section" fluid className="principal">
      <Row as="header" className="cabecera">
        <Col>
          <h2>Listado de ingresos</h2>
        </Col>
      </Row>
      <main>
        <Busqueda></Busqueda>
        <Table bordered hover striped className="listado">
          <thead className="thead-light">
            <tr>
              <th className="col-min">Num.</th>
              <th className="col-med">Fecha</th>
              <th className="col-concepto">Concepto</th>
              <th className="col-med">Base</th>
              <th className="col-max">IVA</th>
              <th className="col-med">Total</th>
              <th className="col-max">Estado</th>
              <th className="col-max">Vence</th>
            </tr>
          </thead>
          <Filas></Filas>
          <CuentaFinalTotal></CuentaFinalTotal>
        </Table>
      </main>
    </Container>
  );
}

export default App;

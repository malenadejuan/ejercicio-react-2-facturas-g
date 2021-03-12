import Busqueda from "./Busqueda";
import Filas from "./Filas";
import { Container, Row, Col, Table } from "react-bootstrap";

function App() {
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
        </Table>
      </main>
    </Container>
  );
}

export default App;

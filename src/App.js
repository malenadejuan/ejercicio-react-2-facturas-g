import { Container, Row, Col, Form, Table } from "react-bootstrap";
import Busqueda from "./Busqueda";

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
          <tbody>
            <tr className="factura factura-dummy">
              <td className="numero"></td>
              <td className="fecha"></td>
              <td className="concepto"></td>
              <td><span className="base"></span>€</td>
              <td><span className="cantidad-iva"></span>€ (<span className="tipo-iva"></span>%)</td>
              <td><span className="total"></span>€</td>
              <td className="estado"></td>
              <td className="vencimiento"></td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="totales">
              <th className="text-right" colspan="3">Totales:</th>
              <td><span className="total-bases"></span>€</td>
              <td><span className="total-ivas"></span>€</td>
              <td><span className="total-totales"></span>€</td>
              <td colspan="2"></td>
            </tr>
          </tfoot>
        </Table>
      </main>
    </Container>
  );
}

export default App;

import { useEffect, useState } from "react";
import Busqueda from "./Busqueda";
import Filas from "./Filas";
import useFetch from "./hooks/useFetch";
import { Container, Row, Col, Table } from "react-bootstrap";
import { DateTime } from "luxon";

function App() {
  const { DateTime } = require("luxon");
  const numeroIVA = (base, tipoIVA) => base * (tipoIVA / 100);
  const datosFacturas = useFetch(`${process.env.REACT_APP_API_URL}`);
  const datovencimiento = (diaActual, caducidad) => {
    if (caducidad > diaActual) {
      return true;
    } else {
      return false;
    }
  };
  const datosDelVencimiento = (vencimiento) => {
    const diaActual = DateTime.local();
    const caducidad = DateTime.fromMillis(+vencimiento);
    const otrosDias = caducidad.diff(diaActual, "days").toObject();
    const difeterentesFechas = Math.abs(Math.trunc(otrosDias.days));
    if (datovencimiento(diaActual, caducidad)) {
      return `${caducidad.toLocaleString()} (faltan ${difeterentesFechas} días)`;
    } else {
      return `${caducidad.toLocaleString()} (hace ${difeterentesFechas} días)`;
    }
  };
  const [sumaTotalBase, setSumaTotalBase] = useState(0);
  const [sumaTotalIVA, setSumaTotalIVA] = useState(0);
  const [sumaTotalTotal, setSumaTotalTotal] = useState(0);
  useEffect(() => {
    if (datosFacturas) {
      setSumaTotalBase(datosFacturas.map(datos => datos.base).reduce((acc, base) => acc + base));
      setSumaTotalIVA(datosFacturas.map(datos => datos.base * (datos.tipoIva / 100)).reduce((acc, iva) => acc + iva));
      setSumaTotalTotal(Math.round(datosFacturas.map(datos => datos.base + datos.base * (datos.tipoIva / 100)).reduce((acc, total) => acc + total) * 100) / 100);
    }
  }, [datosFacturas]);
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
            <Filas
              datos={datosFacturas}
              numeroIVA={numeroIVA}
              datovencimiento={datovencimiento}
              datosDelVencimiento={datosDelVencimiento} />
          </tbody>
          <tfoot>
            <tr className="totales">
              <th className="text-right" colspan="3">Totales :</th>
              <td><span className="total-bases">{`${sumaTotalBase}`}</span>€</td>
              <td><span className="total-ivas">{`${sumaTotalIVA}`}</span>€</td>
              <td><span className="total-totales">{`${sumaTotalTotal}`}</span>€</td>
              <td colspan="2"></td>
            </tr>
          </tfoot>
        </Table>
      </main>
    </Container>
  );
};
export default App;

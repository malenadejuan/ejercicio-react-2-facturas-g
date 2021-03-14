import PropTypes from "prop-types";
import { DateTime } from "luxon";

const Filas = (props) => {
  const { datos, DateTime, numeroIVA, Vencimiento, datoVencimiento } = props;
  return (
    <tbody> {datos ? datos.map((factura) => (
      <tr key={datos.id} className="factura">
        <td className="numero">{factura.numero}</td>
        <td className="fecha">{DateTime.fromMillis(+factura.fecha).toLocaleString()}</td>
        <td className="concepto">{factura.concepto}</td>
        <td><span className="base">{factura.base.toFixed(2)}</span>€</td>
        <td><span className="cantidad-iva">{numeroIVA(factura.base, factura.tipoIva)}</span>€
          (<span className="tipo-iva">{factura.tipoIva}</span>%)</td>
        <td><span className="total">{(factura.base + numeroIVA(factura.base, factura.tipoIva)).toFixed(2)}</span>€</td>
        <td className="estado"></td>
        <td className="vencimiento"></td>
      </tr>
    )) : <tr className="factura-dummy" />
    }
    </tbody>
  );
};

Filas.propTypes = {
  DateTime: PropTypes.instanceOf(DateTime).isRequired,
  datos: PropTypes.array.isRequired,
  numeroIVA: PropTypes.func.isRequired,
};
export default Filas;

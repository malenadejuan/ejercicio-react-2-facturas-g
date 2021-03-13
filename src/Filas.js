import PropTypes from "prop-types";
import { DateTime } from "luxon";
import UlAPI from "./UrlAPI";

const Filas = () => {
  return (
    <>
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
    </>
  );
};

export default Filas;

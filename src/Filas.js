import UrlAPI from "./UrlAPI";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

const Filas = (props) => {
  const { DatosNumeros, DateTime, NumeroIVA, Vencimiento, DatoVencimiento } = props;
  return (
    <tbody> {DatosNumeros ? DatosNumeros.map((factura) => (
      <tr key={DatosNumeros.id} className="factura">
        <td className="numero">{factura.numero}</td>
        <td className="fecha">{DateTime.fromMillis(+factura.fecha).toLocaleString()}</td>
        <td className="concepto">{factura.concepto}</td>
        <td><span className="base">{factura.base.toFixed(2)}</span>€</td>
        <td><span className="cantidad-iva">{NumeroIVA(factura.base, factura.tipoIva)}</span>€
          (<span className="tipo-iva">{factura.tipoIva}</span>%)</td>
        <td><span className="total">{(factura.base + NumeroIVA(factura.base, factura.tipoIva)).toFixed(2)}</span>€</td>
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
  DatosNumeros: PropTypes.array.isRequired,
  NumeroIVA: PropTypes.func.isRequired,
};
export default Filas;

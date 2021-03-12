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
      <tfoot>
        <tr className="totales">
          <th className="text-right" colspan="3">Totales:</th>
          <td><span className="total-bases"></span>€</td>
          <td><span className="total-ivas"></span>€</td>
          <td><span className="total-totales"></span>€</td>
          <td colspan="2"></td>
        </tr>
      </tfoot>
    </>
  );
};

export default Filas;

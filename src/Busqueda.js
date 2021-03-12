import { Row, Col, Form } from "react-bootstrap";

const Busqueda = () => {
  return (
    <Row>
      <Col className="info-listado info-listado-top text-right">
        <Form.Label>
          Buscar
            <Form.Control type="text" />
        </Form.Label>
      </Col>
    </Row>
  );
};

export default Busqueda;

import React from "react";
import { Container, Row, Col } from "shards-react";

const Status = ({ context, keys }) => (
  <Container style={{ marginBottom: "1em" }}>
    {keys.map((key) => (
      <Row key={key}>
        <Col sm={2} style={{ fontWeight: "bold" }}>
          {key}
        </Col>
        <Col sm={10}>{context[key]}</Col>
      </Row>
    ))}
  </Container>
);

export default Status;

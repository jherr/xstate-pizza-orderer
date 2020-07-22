import React from "react";
import { useForm } from "react-hook-form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Container,
  Row,
  Col,
  Button,
} from "shards-react";

import Steps from "./Steps";
import Status from "./Status";

const ToppingsForm = ({ context, onNext, onPrevious }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: context,
  });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={2} />
      <Status context={context} keys={["status", "type"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Toppings</InputGroupText>
        </InputGroupAddon>
        <FormInput
          placeholder="Pizza toppings"
          name="toppings"
          invalid={!!errors.toppings}
          innerRef={register({ required: true })}
        />
      </InputGroup>
      <Container>
        <Row>
          <Col sm={{ size: 2 }}>
            <Button onClick={onPrevious}>Type!</Button>
          </Col>
          <Col sm={{ size: 2, offset: 8 }}>
            <Button type="submit">Address!</Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default ToppingsForm;

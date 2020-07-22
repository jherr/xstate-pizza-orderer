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

const TypeForm = ({ context, onNext }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: context,
  });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={1} />
      <Status context={context} keys={["status"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Type</InputGroupText>
        </InputGroupAddon>
        <FormInput
          placeholder="Pizza type"
          name="type"
          invalid={!!errors.type}
          innerRef={register({ required: true })}
        />
      </InputGroup>
      <Container>
        <Row>
          <Col sm={{ size: 2, offset: 10 }}>
            <Button type="submit">Toppings!</Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default TypeForm;

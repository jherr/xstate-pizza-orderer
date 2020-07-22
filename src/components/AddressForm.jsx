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

const AddressForm = ({ context, onNext, onPrevious }) => {
  const { register, errors, handleSubmit } = useForm({
    mode: "all",
    reValidateMode: "all",
    defaultValues: context,
  });

  return (
    <form onSubmit={handleSubmit(onNext)}>
      <Steps current={3} />
      <Status context={context} keys={["status", "type", "toppings"]} />
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText>Address</InputGroupText>
        </InputGroupAddon>
        <FormInput
          placeholder="Address"
          name="address"
          invalid={!!errors.address}
          innerRef={register({ required: true })}
        />
      </InputGroup>
      <Container>
        <Row>
          <Col sm={{ size: 2 }}>
            <Button onClick={onPrevious}>Toppings!</Button>
          </Col>
          <Col sm={{ size: 2, offset: 8 }}>
            <Button type="submit">Bake It!</Button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default AddressForm;

import React from "react";
import { useMachine } from "@xstate/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import pizzaStateMachine from "./pizzaStateMachine";
import TypeForm from "./components/TypeForm";
import ToppingsForm from "./components/ToppingsForm";
import AddressForm from "./components/AddressForm";
import Status from "./components/Status";
import Steps from "./components/Steps";

function App() {
  const [current, send] = useMachine(pizzaStateMachine);

  return (
    <div
      style={{
        margin: "auto",
        width: 1200,
        padding: "1em",
      }}
    >
      {current.matches("setType") && (
        <TypeForm
          context={current.context}
          onNext={({ type }) => {
            send({ type: "type.UPDATE", value: type });
            send("NEXT");
          }}
        />
      )}
      {current.matches("setToppings") && (
        <ToppingsForm
          context={current.context}
          onNext={({ toppings }) => {
            send({ type: "toppings.UPDATE", value: toppings });
            send("NEXT");
          }}
          onPrevious={() => send("PREV")}
        />
      )}
      {current.matches("setAddress") && (
        <AddressForm
          context={current.context}
          onNext={({ address }) => {
            send({ type: "address.UPDATE", value: address });
            send("NEXT");
          }}
          onPrevious={() => send("PREV")}
        />
      )}
      {current.matches("startBaking") && (
        <>
          <Steps current={4} />
          <Status
            context={current.context}
            keys={["status", "bakingTime", "type", "toppings", "address"]}
          />
        </>
      )}
    </div>
  );
}

export default App;

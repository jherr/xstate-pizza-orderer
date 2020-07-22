import { Machine, assign } from "xstate";

const pizzaStateMachine = Machine(
  {
    id: "pizzaStateMachine",
    initial: "setType",
    context: {
      status: "Deciding",
      bakingTime: 0,
      type: "Pepperoni",
      toppings: "Lotsa toppings",
      address: "My home address",
    },
    states: {
      setType: {
        on: {
          "type.UPDATE": {
            actions: assign({
              type: (_, event) => event.value,
            }),
          },
          NEXT: "setToppings",
        },
      },
      setToppings: {
        on: {
          "toppings.UPDATE": {
            actions: assign({
              toppings: (_, event) => event.value,
            }),
          },
          PREV: "setType",
          NEXT: "setAddress",
        },
      },
      setAddress: {
        on: {
          "address.UPDATE": {
            actions: assign({
              address: (_, event) => event.value,
            }),
          },
          PREV: "setToppings",
          NEXT: "startBaking",
        },
      },
      startBaking: {
        invoke: {
          src: () => (cb) => {
            window.setInterval(() => {
              cb("BAKING_TICK");
            }, 1000);
          },
        },
        on: {
          BAKING_TICK: {
            actions: assign({
              bakingTime: (context) => context.bakingTime + 1,
            }),
          },
        },
        entry: ["setBaking"],
      },
    },
  },
  {
    actions: {
      setBaking: (context) => (context.status = "Baking!"),
    },
  }
);

export default pizzaStateMachine;

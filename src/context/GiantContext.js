// packages
import React, { createContext, useReducer } from "react";

// data
import data from "../data/giants";

/* Start of context */
const giantsData = data;

const GiantContext = createContext(giantsData);
const { Provider } = GiantContext;

const GiantProvider = ({ children }) => {
  const [giants] = useReducer((action) => {
    switch (action.type) {
      case "FETCH_GIANTS":
        const giantState = giantsData;
        return giantState;
      default:
        throw new Error();
    }
  }, giantsData);

  return <Provider value={{ giants }}>{children}</Provider>;
};

export { GiantContext, GiantProvider };

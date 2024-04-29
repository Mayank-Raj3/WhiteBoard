import { createContext } from "react";

const boardContext = createContext({
  activeToolItems: "",
  element: [],
});

export default boardContext;

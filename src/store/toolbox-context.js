import { createContext } from "react";

const toolboxContext = createContext({
  toolboxState: {}, // Every tool will have a toolbox that have option for changing color , stoke size etc
});

export default toolboxContext;

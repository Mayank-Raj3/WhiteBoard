import { createContext } from "react";

const boardContext = createContext({
  activeToolItem: "", // current tool
  toolActionType: "", // current types
  elements: [], // drawings cordinate and shape
  changeToolHandler: () => {}, // changes the current selected tool
  boardMouseDownHandler: () => {}, // when we click on line tool it gets called and adds pivot cordinate
  boardMouseMoveHandler: () => {}, // this keeps changeing the last cordinates in the last element state while toolActiontype is "Moving"
  boardMouseUpHandler: () => {}, //when we release the click it sets the eement and element is drawn
});

export default boardContext;

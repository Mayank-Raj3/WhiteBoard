import React, { useReducer } from "react";
import boardContext from "./board-context";
import { TOOL_ITEMS, BOARD_ACTIONS } from "../constants";

const boardReducer = (state, action) => {
  switch (action.type) {
    case BOARD_ACTIONS.CHANGE_TOOL:
      return {
        ...state, //same elements
        activeToolItem: action.payload.tool, //change the tool
      };

    default:
      return state;
  }
};

const initalBoardState = {
  activeToolItem: TOOL_ITEMS.LINE,
  element: [],
};

function BoardProvider({ children }) {
  const [boardState, dispatchBoardAction] = useReducer(
    boardReducer,
    initalBoardState
  );

  /*
  used Reducer to handle these state
   const [activeToolItem, setActiveToolItem] = useState(TOOL_ITEMS.LINE);
   const [element, setElement] = useState([]);
*/
  const handleItemClick = (tool) => {
    // setActiveToolItem(tool);
    dispatchBoardAction({ type: BOARD_ACTIONS.CHANGE_TOOL, payload: { tool } });
  };

  const boardContextValue = {
    activeToolItem: boardState.activeToolItem,
    handleItemClick,
  };

  return (
    <boardContext.Provider value={boardContextValue}>
      {children}
    </boardContext.Provider>
  );
}

export default BoardProvider;

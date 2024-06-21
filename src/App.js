import React from "react";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import BoardProvider from "./store/BoardProvider";
import ToolboxProvider from "./store/ToolBoxProvider";
import Toolbox from "./components/Toolbox";
function App() {
  return (
    <BoardProvider>
      <ToolboxProvider>
        <Board />
        <Toolbar />
        <Toolbox />
      </ToolboxProvider>
    </BoardProvider>
  );
}

export default App;

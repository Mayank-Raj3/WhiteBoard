import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import Toolbox from "./components/Toolbox";
import BoardProvider from "./store/BoardProvider";
import ToolBxProvider from "./store/ToolBxProvider";

function App() {
  return (
    <BoardProvider>
      <ToolBxProvider>
        <Toolbar />
        <Board />
        <Toolbox />
      </ToolBxProvider>
    </BoardProvider>
  );
}

export default App;

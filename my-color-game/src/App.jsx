import { HashRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import StartGame from "./pages/StartGame";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="game" element={<Game />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;

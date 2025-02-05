import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import StartGame from "./pages/StartGame";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="game" element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

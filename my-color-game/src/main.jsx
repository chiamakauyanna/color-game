import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ColorGameContext } from "./context/ColorGameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorGameContext>
      <App />
    </ColorGameContext>
  </StrictMode>
);

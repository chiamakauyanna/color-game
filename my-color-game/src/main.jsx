import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GameContext } from './context/GameContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GameContext>
    <App />
    </GameContext>
  </StrictMode>,
)

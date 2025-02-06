import { useContext } from "react";
import GuessButtons from "../components/common/GuessButtons";
import MysteryBox from "../components/common/MysteryBox";
import { ColorGameContext } from "../context/gameContext";
import Button from "../components/common/Button";
import "../styles/Game.css";

const Game = () => {
  const { score, gameStatus, showMessage, setRandomColor, randomColorGenerator, setScore } = useContext(ColorGameContext);

  const newGame = () => {
    setRandomColor(randomColorGenerator());
    setScore(0);
  };

  return (
    <div className="game-container">
      <Button text="New Game" className="new-game-button" handleClick={newGame} />
      
      <div className="game-content">
        <MysteryBox />

        <div className="game-instructions">
          <h2 data-testid="gameInstructions">
            <span className="highlight">Instruction - </span>Match the color in the box!
          </h2>
        </div>

        <p className="score" data-testid="newGameButton">Score: {score}</p>

        <div className="status-message">
          {showMessage && (
            <div
              className={`game-status ${
                gameStatus === "✅ Correct!" ? "correct" : "wrong"
              }`}
              data-testid="gameStatus"
            >
              {gameStatus}
            </div>
          )}
        </div>

        <GuessButtons />
      </div>
    </div>
  );
};

export default Game;

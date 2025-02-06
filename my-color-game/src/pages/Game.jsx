import { useContext } from "react";
import GuessButtons from "../components/common/GuessButtons";
import MysteryBox from "../components/common/MysteryBox";
import Button from "../components/common/Button";
import "../styles/Game.css";
import { GameContext } from "../context/ColorGameContext";

const Game = () => {
  const {
    score,
    gameStatus,
    showMessage,
    setRandomColor,
    randomColorGenerator,
    setScore,
  } = useContext(GameContext);

  const newGame = () => {
    setRandomColor(randomColorGenerator());
    setScore(0);
  };

  return (
    <div className="game-container">
      <Button
        text="New Game"
        className="new-game-button"
        handleClick={newGame}
        datatestid="newGameButton"
      />
      <div className="game-instructions">
        <h2 data-testid="gameInstructions">Guess the color in the box!</h2>
      </div>
      <div className="game-content">
        <MysteryBox />

        <p className="score" data-testid="score">
          Score: {score}
        </p>

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

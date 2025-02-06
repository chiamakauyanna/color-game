import { useContext } from "react";
import { ColorGameContext } from "../../context/gameContext";
import "../../styles/GuessButtons.css";

const GuessButtons = () => {
  const {
    randomColor,
    colorArray,
    setRandomColor,
    randomColorGenerator,
    setScore,
    setGameStatus,
    setShowMessage,
  } = useContext(ColorGameContext);

  const gameLogic = (selectedColor) => {
    const isCorrect = selectedColor === randomColor;
  
    setGameStatus(isCorrect ? "✅ Correct!" : "❌ Wrong! Try again.");
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
  
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  
    setRandomColor(randomColorGenerator());
  };
  

  return (
    <div className="button-container">
      {colorArray.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color }}
          className="color-button"
          onClick={() => gameLogic(color)}
          data-testid="colorOption"
        ></button>
      ))}
    </div>
  );
};

export default GuessButtons;

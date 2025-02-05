import { useContext } from "react";
import { ColorGameContext } from "../../context/gameContext";

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
    if (selectedColor === randomColor) {
      setGameStatus("✅ Correct!");
      setScore((prevScore) => prevScore + 1);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    } else {
      setGameStatus("❌ Wrong! Try again.");
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }

    setRandomColor(randomColorGenerator());
  };

  return (
    <div className="grid grid-cols-3 mt-7 gap-3 p-4 rounded-lg">
      {colorArray.map((color, index) => (
        <button
          key={index}
          style={{ backgroundColor: color }}
          className="w-32 h-32 rounded transition duration-300 ease-in-out hover:scale-105"
          onClick={() => gameLogic(color)}
        ></button>
      ))}
    </div>
  );
};

export default GuessButtons;

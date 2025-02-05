import { useContext } from "react";
import GuessButtons from "../components/common/GuessButtons";
import MysteryBox from "../components/common/MysteryBox";
import { ColorGameContext } from "../context/gameContext";
import Button from "../components/common/Button";

const Game = () => {
  const { score, gameStatus, showMessage, setRandomColor,
    randomColorGenerator,
    setScore, } = useContext(ColorGameContext);

  const newGame = () => {
      setRandomColor(randomColorGenerator())
      setScore(0)
  }
  return (
    <div className="">
      <Button text='New Game' className='my-4 border' handleClick={newGame}/>
      <div className="text-center">
        <MysteryBox />
        <div className="mt-6 p-2 ">
          <h2 className="text-lg">
            <span className="">Instruction - </span>Match the color in the box!
          </h2>
        </div> 
        <p className="text-lg mb-2">Score : {score}</p>
        <div className="h-4">
            {showMessage && <div
            className={`text-2xl font-bold transition-opacity duration-500 ${
              gameStatus === "✅ Correct!" ? "text-green-500 animate-bounce" : "text-red-500 animate-pulse"
            }`}
          > {gameStatus}</div>}
        </div>
     
        <GuessButtons />
      </div>
    </div>
  );
};

export default Game;

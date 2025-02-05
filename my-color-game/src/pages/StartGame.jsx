import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const StartGame = () => {
  return (
    <div className="text-center space-y-20">
      <h1 className="text-5xl mt-28 p-2 text-[#ffbe0b]">Color Game</h1>
      <Link to="/game">
        <Button text="Start Game" className='bg-[#8338ec]  shadow-[#ffbe0b]'/>
      </Link>
    </div>
  );
};

export default StartGame;

import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Button from "../components/common/Button";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">Color Game</h1>

      <div className="game-illustration">
        <div className="shape cone"></div>
        <div className="arrow">
          <FaLongArrowAltLeft />
        </div>
        <div className="shape square"></div>
      </div>

      <Link to="/game">
        <Button text="Start Game" className="start-button" />
      </Link>

      <footer className="footer">Coded by Chiamaka Uyanna</footer>
    </div>
  );
};

export default Home;

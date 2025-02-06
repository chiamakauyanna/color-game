import { useContext } from "react";
import "../../styles/MysteryBox.css"; 
import { GameContext } from "../../context/ColorGameContext";
const MysteryBox = () => {
  const { randomColor } = useContext(GameContext);

  return (
    <div className="mystery-box">
      <div
        className="color-display"
        style={{
          backgroundColor: randomColor,
          boxShadow: `0 0 15px ${randomColor}`,
        }}
        data-testid="colorBox"
      ></div>
    </div>
  );
};

export default MysteryBox;

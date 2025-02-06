import { useContext } from "react";
import { ColorGameContext } from "../../context/gameContext";
import "../../styles/MysteryBox.css"; 
const MysteryBox = () => {
  const { randomColor } = useContext(ColorGameContext);

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

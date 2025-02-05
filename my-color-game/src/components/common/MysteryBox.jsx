import { useContext } from "react";
import { ColorGameContext } from "../../context/gameContext";

const MysteryBox = () => {
  const { randomColor } = useContext(ColorGameContext);
  return (
    <div className="flex justify-center mt-1 border-3 py-4 rounded-lg">
      <div
        className="w-32 h-24 rounded-t-full "
        style={{ backgroundColor: randomColor,
          boxShadow: `0 0 15px ${randomColor}`
         }}
      ></div>
    </div>
  );
};

export default MysteryBox;

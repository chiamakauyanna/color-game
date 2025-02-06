import React from "react";

const GameContext = React.createContext();

const ColorGameContext = (prop) => {
  const [score, setScore] = React.useState(0);
  const [showMessage, setShowMessage] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState(false);

  const colors = {
    hotPink: "#ff006e",
    electricPurple: "#8338ec",
    neonBlue: "#3a86ff",
    neonYellow: "#ffbe0b",
    brightOrange: "#fb5607",
    cyanGreen: "#06d6a0",
  };

  let colorArray = Object.values(colors);

  const randomColorGenerator = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  };
  const [randomColor, setRandomColor] = React.useState(randomColorGenerator());
  return (
    <GameContext.Provider
      value={{
        randomColor,
        setRandomColor,
        colorArray,
        randomColorGenerator,
        score,
        setScore,
        setShowMessage,
        showMessage,
        gameStatus,
        setGameStatus,
      }}
    >
      {prop.children}
    </GameContext.Provider>
  );
};

export { ColorGameContext, GameContext };

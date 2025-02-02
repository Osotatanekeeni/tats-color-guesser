import React, { useState } from "react";
import "./styles/style.css";
import colors from "./utils/colors";

function ColorGuesserGame() {
  // Set the current target color and options randomly
  const [gameData, setGameData] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );

  const instruction = "Guess the correct color";
  const [status, setStatus] = useState("");
  const [score, setScore] = useState(0);

  const handleGuess = (color) => {
    if (color === gameData.target) {
      // if the chosen color is the same as the target color, change the message to "correct"
      setStatus("correct");

      // Then increment the score
      setScore(score + 1);

      // let the status only be visible for 2 seconds
      // then display another color set
      setTimeout(() => {
        setGameData(colors[Math.floor(Math.random() * colors.length)]);
        setStatus("");
      }, 2000);
    } else {
      setStatus("wrong");
      setTimeout(() => setStatus(""), 500);
    }
  };

  const resetGame = () => {
    setGameData(colors[Math.floor(Math.random() * colors.length)]);
    setScore(0);
    setStatus("");
  };
  return (
    <div class="main-container">
      <div class="game-container">
        <h2 class="title">Tats' Color Guesser</h2>
        <div
          className="color-box"
          data-testid="colorBox"
          style={{
            backgroundColor: gameData.target,
            width: "6em",
            height: "6em",
            borderRadius: 15,
            border: "none",
          }}
        ></div>
        <h2 data-testid="gameInstructions" className="instruction">
          {instruction}
        </h2>
        <div className="options">
          {[gameData.target, ...gameData.choices]
            .sort(() => Math.random() - 0.5)
            .map((color, index) => (
              <button
                key={index}
                className="color-option large-button"
                data-testid="colorOption"
                style={{
                  backgroundColor: color,
                  width: "6em",
                  height: "6em",
                  borderRadius: 15,
                  border: "none",
                }}
                onClick={() => handleGuess(color)}
              ></button>
            ))}{" "}
        </div>
        <h2 data-testid="gameStatus" className={`status ${status}`}>
          {status ? `${status.charAt(0).toUpperCase() + status.slice(1)}!` : ""}
        </h2>
        <p id="score" data-testid="score">
          Score: {score}
        </p>
        <div className="new-game-container">
          <button
            className="new-game-button"
            data-testid="newGameButton"
            onClick={resetGame}
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorGuesserGame;

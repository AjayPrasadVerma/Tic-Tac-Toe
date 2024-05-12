import { useState } from "react";

import Player from "./components/Player";

import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const derivedActivePlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

const WINNING_COMBINATIONS = [];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((preTurns) => {
      let currentPlayer = derivedActivePlayer(preTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log truns={gameTurns} />
    </main>
  );
}

export default App;

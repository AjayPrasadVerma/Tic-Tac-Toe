import { useState } from "react";

import Player from "./components/Player";

import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { findWinner } from "./winning-combination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const derivedActivePlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

function App() {
  const [player, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((innerArr) => [...innerArr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const winnerSymbol = findWinner(gameBoard);
  const winner = winnerSymbol ? player[winnerSymbol] : null;
  const hasDraw = gameTurns?.length === 9 && !winner;

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

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, name) => {
    setPlayers((prevName) => ({ ...prevName, [symbol]: name }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={player.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeNmae={handlePlayerNameChange}
          />
          <Player
            name={player.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeNmae={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log truns={gameTurns} />
      <p className="footer">Developed By : Ajay Prasad Verma</p>
    </main>
  );
}

export default App;

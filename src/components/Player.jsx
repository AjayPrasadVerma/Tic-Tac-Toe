import React, { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeNmae }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      onChangeNmae(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            onChange={(e) => setPlayerName(e.target.value)}
            value={playerName}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;

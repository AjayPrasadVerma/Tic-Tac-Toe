import React, { useState } from "react";

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <li>
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

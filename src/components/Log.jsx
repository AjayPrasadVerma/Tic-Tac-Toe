import React from "react";

const Log = ({ truns }) => {
  return (
    <ol id="log">
      {truns.map((trun) => (
        <li key={`${trun.square.row}${trun.square.col}`}>
          {trun.player} selected {trun.square.row}, {trun.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;

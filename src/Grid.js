import React from 'react';
import './GameBoard.css'

function colors(number){
    return 'filled' + number + ' grid-cell';
}

function Grid({ values }) {
  return (
    <div className="grid-container">
      {values.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((value, colIndex) => (
            <div key={colIndex} className={`${value == null ? 'grid-cell' : colors(value)}`}>
              {value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;
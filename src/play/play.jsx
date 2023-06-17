import React, { useEffect, useState } from 'react';
import './play.css';

export function Play() {
  const [movesNum, setMovesNum] = useState(0);
  const [tiles, setTiles] = useState(Array.from(Array(16).keys()));

  useEffect(() => {
    randomizePuzzle();
  }, []);

  const moveTile = (index) => {
    if (isValidMove(index)) {
      const emptyIndex = tiles.indexOf(0);
      const updatedTiles = [...tiles];
      [updatedTiles[emptyIndex], updatedTiles[index]] = [updatedTiles[index], updatedTiles[emptyIndex]];
      setTiles(updatedTiles);
      setMovesNum((prevMovesNum) => prevMovesNum + 1);
      checkPuzzleCompletion(updatedTiles);
    }
  };

  const isValidMove = (index) => {
    const emptyIndex = tiles.indexOf(0);
    const rowDiff = Math.floor(index / 4) - Math.floor(emptyIndex / 4);
    const colDiff = (index % 4) - (emptyIndex % 4);
    return (rowDiff === 0 && Math.abs(colDiff) === 1) || (colDiff === 0 && Math.abs(rowDiff) === 1);
  };

  const checkPuzzleCompletion = (updatedTiles) => {
    const isCompleted = updatedTiles.every((tile, index) => tile === index + 1);
    if (isCompleted) {
      // Puzzle completed logic here
    }
  };

  const randomizePuzzle = () => {
    const shuffledTiles = [...tiles];
    for (let i = shuffledTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
    }
    setTiles(shuffledTiles);
    setMovesNum(0);
  };

  const solvePuzzle = () => {
    setMovesNum(0);
    setTiles(Array.from(Array(16).keys())); // Reset tiles to initial ordered state
    checkPuzzleCompletion(Array.from(Array(16).keys()));
  };

  return (
    <main>
      <figure className="SlidingPuzzleFigure">
        <section>
          <ul className="SlidingPuzzle">
            {tiles.map((tile, index) => (
              <li
                className={`Tile Tile${tile}${tile === 0 ? ' EmptyTile' : ''}`}
                key={index}
                onClick={() => moveTile(index)}
              >
                {tile}
              </li>
            ))}
          </ul>
          <div>
            <div className="moves">
              Moves: <span id="movesnum">{movesNum}</span>
            </div>
            <button type="button" id="newgame" onClick={randomizePuzzle}>
              New Game
            </button>
            <button type="button" id="solvepuzzle" onClick={solvePuzzle}>
              Solve!
            </button>
          </div>
        </section>
      </figure>
    </main>
  );
}


import React from 'react';
import './play.css';
// import ',/play.js';


export function Play() {
  return (
    <main>
      <figure className="SlidingPuzzleFigure">
        <section>
          <ul className="SlidingPuzzle">
            <li className="Tile Tile1">1</li>
            <li className="Tile Tile2">2</li>
            <li className="Tile Tile3">3</li>
            <li className="Tile Tile4">4</li>
            <li className="Tile Tile5">5</li>
            <li className="Tile Tile6">6</li>
            <li className="Tile Tile7">7</li>
            <li className="Tile Tile8">8</li>
            <li className="Tile Tile9">9</li>
            <li className="Tile Tile10">10</li>
            <li className="Tile Tile11">11</li>
            <li className="Tile Tile12">12</li>
            <li className="Tile Tile13">13</li>
            <li className="Tile Tile14">14</li>
            <li className="Tile Tile15">15</li>
            <li className="Tile EmptyTile"></li>
          </ul>
          <div>
            <div className="moves">
              Moves: <span id="movesnum">0</span>
            </div>
            <button type="button" id="newgame">
              New Game
            </button>
            <button type="button" id="solveit">
              Solve It!
            </button>
          </div>
        </section>
      </figure>
    </main>
  );
}
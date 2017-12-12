import React from 'react';
import Counter from './Counter';

const Player = props => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={ () => props.removePlayer(props.index) }>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter 
          index={ props.index }
          updatePlayerScore={ props.updatePlayerScore }
          onChange={ props.onScoreChange } 
          score={props.score} />
      </div>
    </div>
  );
}

export default Player;
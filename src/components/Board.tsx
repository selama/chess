import * as React from 'react';

interface GameState {
  turn: 'white' | 'black'
}

interface BoardProps {
  gameState: GameState;
}

export const Board: React.SFC<BoardProps> = (props) => {
  const {gameState} = props;
  return <div>{gameState.turn}</div>;
}
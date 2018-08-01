import * as React from 'react';
import {IGameState} from '../types/IGameState';

interface BoardProps {
  gameState: IGameState;
}

export const Board: React.SFC<BoardProps> = (props) => {
  const {gameState} = props;
  return <div>{gameState.turn}</div>;
}

import * as React from 'react';
import {Board} from './Board';
import { IGameState } from '../types/IGameState';
import { PlayerColor } from '../types/PlayerColor';
import { IBoardState } from '../types/IBoardState';
import { IMove } from '../types/IMove';
import { IPiece } from '../types/IPiece';

const getInitialGameState = (): IGameState => {
  const board: IPiece[][] = [];
  
  const lastMove: IMove = null;
  const boardState: IBoardState = {
    board,
    lastMove
  }
  const gameState: IGameState = {
    turn: PlayerColor.WHITE,
    boardState
  };

  return gameState;
}

export const App = () => {
  return <div>
    <div>lorem ipsum</div>
    <Board gameState={getInitialGameState()}/>
  </div>;
}

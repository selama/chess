import { IPiece } from './IPiece';
import { IMove } from './IMove';
import { ISquare } from './ISquare';
import { PlayerColor } from './PlayerColor';

export interface IBoard {
  squares: ISquare[];
  lastMove: IMove;
  turn: PlayerColor;
}

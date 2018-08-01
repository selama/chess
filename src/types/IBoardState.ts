import { IPiece } from './IPiece';
import { IMove } from './IMove';

export interface IBoardState {
  board: IPiece[][];
  lastMove: IMove;
}

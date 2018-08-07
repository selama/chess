import { PlayerColor } from '../enums/player-color';
import { SquareModel } from './square-model';
import { MoveModel } from './move-model';

const ROWS = 8;
const COLS = 8;

export class BoardModel {

  private squares: SquareModel[];
  private turn: PlayerColor;
  private lastMove: MoveModel;

  constructor() {
    this.squares = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        this.squares.push(new SquareModel(row, col));
      }
    }
  }

  getSquare(row: number, col: number) {
    return this.squares.find(square => square.getRow() === row && square.getCol() === col);
  }

  getSquares() {
    return this.squares;
  }
}
import { PieceModel } from './piece-model';

export class SquareModel {
  private row: number;
  private col: number;
  private piece: PieceModel;

  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  setPiece(piece: PieceModel) {
    this.piece = piece;
  }

  getPiece() {
    return this.piece;
  }

  getUnique() {
    return `${this.row}-${this.col}`;
  }

  getRow() {
    return this.row;
  }

  getCol() {
    return this.col;
  }

}

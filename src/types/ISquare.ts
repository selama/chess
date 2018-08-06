import { IPiece } from "./IPiece";

export interface ISquare {
  col: number;
  row: number;
  piece?: IPiece;
}

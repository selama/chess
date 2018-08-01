import { PlayerColor } from "./PlayerColor";
import { PieceType } from "./PieceType";

export interface IPiece {
  color: PlayerColor;
  type: PieceType;
}

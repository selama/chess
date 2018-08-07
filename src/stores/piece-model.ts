import { PlayerColor } from '../enums/player-color';
import { PieceType } from '../enums/piece-type';
import { runInThisContext } from 'vm';

export class PieceModel {
  private color: PlayerColor;
  private type: PieceType;

  constructor(color: PlayerColor, type: PieceType) {
    this.color = color;
    this.type = type;
  }

  getColor() {
    return this.color;
  }

  getType() {
    return this.type;
  }
}
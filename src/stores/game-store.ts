import {observable} from 'mobx';
import { BoardModel } from './board-model';
import { PlayerColor } from '../enums/player-color';
import { PieceType } from '../enums/piece-type';
import { PieceModel } from './piece-model';

export class GameStore {

  @observable
  board: BoardModel;

  constructor() {
    this.board = new BoardModel();
    this.setNewGame();
  }

  public setNewGame() {
    this.board.getSquare(0, 0).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.ROOK));
  }
}
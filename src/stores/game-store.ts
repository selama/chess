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
    this.board.getSquare(7, 0).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.ROOK));
    this.board.getSquare(7, 1).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.KNIGHT));
    this.board.getSquare(7, 2).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.BISHOP));
    this.board.getSquare(7, 3).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.QUEEN));
    this.board.getSquare(7, 4).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.KING));
    this.board.getSquare(7, 5).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.BISHOP));
    this.board.getSquare(7, 6).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.KNIGHT));
    this.board.getSquare(7, 7).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.ROOK));

    this.board.getSquare(6, 0).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));
    this.board.getSquare(6, 1).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));
    this.board.getSquare(6, 2).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));
    this.board.getSquare(6, 3).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));
    this.board.getSquare(6, 4).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));
    this.board.getSquare(6, 5).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));
    this.board.getSquare(6, 6).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));
    this.board.getSquare(6, 7).setPiece(new PieceModel(PlayerColor.WHITE, PieceType.PAWN));

    this.board.getSquare(1, 0).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));
    this.board.getSquare(1, 1).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));
    this.board.getSquare(1, 2).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));
    this.board.getSquare(1, 3).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));
    this.board.getSquare(1, 4).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));
    this.board.getSquare(1, 5).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));
    this.board.getSquare(1, 6).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));
    this.board.getSquare(1, 7).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.PAWN));

    this.board.getSquare(0, 0).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.ROOK));
    this.board.getSquare(0, 1).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.KNIGHT));
    this.board.getSquare(0, 2).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.BISHOP));
    this.board.getSquare(0, 3).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.QUEEN));
    this.board.getSquare(0, 4).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.KING));
    this.board.getSquare(0, 5).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.BISHOP));
    this.board.getSquare(0, 6).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.KNIGHT));
    this.board.getSquare(0, 7).setPiece(new PieceModel(PlayerColor.BLACK, PieceType.ROOK));
  }
}
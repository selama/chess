import {observable} from 'mobx';
import { IBoard } from '../types/IBoard';
import { PieceType } from '../types/PieceType';
import { PlayerColor } from '../types/PlayerColor';


const ROWS = 8;
const COLS = 8;

export class GameStore {

  @observable
  board: IBoard;

  initBoard() {
    this.board = {
      squares: [],
      lastMove: null,
      turn: null
    };
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        this.board.squares.push({row, col});
      }
    }
  }

  setPieces() {
    this.board.squares.find(square => square.row === 0 && square.col === 0)
      .piece = {color: PlayerColor.WHITE, type: PieceType.ROOK};
    this.board.squares.find(square => square.row === 0 && square.col === 1)
      .piece = {color: PlayerColor.WHITE, type: PieceType.KNIGHT};
    this.board.squares.find(square => square.row === 0 && square.col === 2)
      .piece = {color: PlayerColor.WHITE, type: PieceType.BISHOP};
    this.board.squares.find(square => square.row === 0 && square.col === 3)
      .piece = {color: PlayerColor.WHITE, type: PieceType.KING};
    this.board.squares.find(square => square.row === 0 && square.col === 4)
      .piece = {color: PlayerColor.WHITE, type: PieceType.QUEEN};
    this.board.squares.find(square => square.row === 0 && square.col === 5)
      .piece = {color: PlayerColor.WHITE, type: PieceType.BISHOP};
    this.board.squares.find(square => square.row === 0 && square.col === 6)
      .piece = {color: PlayerColor.WHITE, type: PieceType.KNIGHT};
    this.board.squares.find(square => square.row === 0 && square.col === 7)
      .piece = {color: PlayerColor.WHITE, type: PieceType.ROOK};

    this.board.squares.find(square => square.row === 1 && square.col === 0)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 1 && square.col === 1)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 1 && square.col === 2)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 1 && square.col === 3)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 1 && square.col === 4)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 1 && square.col === 5)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 1 && square.col === 6)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 1 && square.col === 7)
      .piece = {color: PlayerColor.WHITE, type: PieceType.PAWN};

    this.board.squares.find(square => square.row === 6 && square.col === 0)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 6 && square.col === 1)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 6 && square.col === 2)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 6 && square.col === 3)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 6 && square.col === 4)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 6 && square.col === 5)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 6 && square.col === 6)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};
    this.board.squares.find(square => square.row === 6 && square.col === 7)
      .piece = {color: PlayerColor.BLACK, type: PieceType.PAWN};

    this.board.squares.find(square => square.row === 7 && square.col === 0)
      .piece = {color: PlayerColor.BLACK, type: PieceType.ROOK};
    this.board.squares.find(square => square.row === 7 && square.col === 1)
      .piece = {color: PlayerColor.BLACK, type: PieceType.KNIGHT};
    this.board.squares.find(square => square.row === 7 && square.col === 2)
      .piece = {color: PlayerColor.BLACK, type: PieceType.BISHOP};
    this.board.squares.find(square => square.row === 7 && square.col === 3)
      .piece = {color: PlayerColor.BLACK, type: PieceType.KING};
    this.board.squares.find(square => square.row === 7 && square.col === 4)
      .piece = {color: PlayerColor.BLACK, type: PieceType.QUEEN};
    this.board.squares.find(square => square.row === 7 && square.col === 5)
      .piece = {color: PlayerColor.BLACK, type: PieceType.BISHOP};
    this.board.squares.find(square => square.row === 7 && square.col === 6)
      .piece = {color: PlayerColor.BLACK, type: PieceType.KNIGHT};
    this.board.squares.find(square => square.row === 7 && square.col === 7)
      .piece = {color: PlayerColor.BLACK, type: PieceType.ROOK};

  }

  setTurn() {
    this.board.turn = PlayerColor.WHITE;
  }

  constructor() {
    this.initBoard();
    this.setPieces();
    this.setTurn();
  }
}
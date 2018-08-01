import { PlayerColor } from "./PlayerColor";
import { IBoardState } from "./IBoardState";

export interface IGameState {
  turn: PlayerColor;
  boardState: IBoardState;
}

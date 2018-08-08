
import * as React from 'react';
import { GameStore } from '../../stores/game-store';
import { observer, inject } from 'mobx-react';
import { Square } from '../square/Square';
import * as s from './board.css';

interface IBoardProps {
  gameStore?: GameStore;
}

interface IBoardState {
}

@inject('gameStore')
@observer
export class Board extends React.Component<IBoardProps, IBoardState> {

  render() {
    const squares  = this.props.gameStore.board.getSquares();
    return <div className={s.board}>
      {squares.map((square) => <Square key={square.getUnique()} square={square}/>)}
    </div>;
  }
}

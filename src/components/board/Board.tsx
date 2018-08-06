
import * as React from 'react';
import { GameStore } from '../../stores/gameStore';
import { observer, inject } from 'mobx-react';
import { Square } from '../square/Square';

interface IBoardProps {
  gameStore?: GameStore;
}

interface IBoardState {
}

@inject('gameStore')
@observer
export class Board extends React.Component<IBoardProps, IBoardState> {

  render() {
    const squares  = this.props.gameStore.board.squares;
    return <div>{squares.map((square) => <Square key={`${square.row}-${square.col}`} square={square}/>)}</div>
  }
}

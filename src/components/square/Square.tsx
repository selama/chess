import * as React from 'react';
import { GameStore } from '../../stores/gameStore';
import { observer } from 'mobx-react';
import { ISquare } from '../../types/ISquare';

interface ISquareProps {
  square: ISquare;
}

interface ISquareState {
}

@observer
export class Square extends React.Component<ISquareProps, ISquareState> {

  render() {
    const {piece} = this.props.square;
    return <div>{piece ? `${piece.type}---${piece.color}` : `===`}</div>
  }
}

import * as React from 'react';
import { observer } from 'mobx-react';
import { SquareModel } from '../../stores/square-model';

interface ISquareProps {
  square: SquareModel;
}

interface ISquareState {
}

@observer
export class Square extends React.Component<ISquareProps, ISquareState> {

  render() {
    const piece = this.props.square.getPiece();
    return <div>{piece ? `${piece.getType()}---${piece.getColor()}` : `===`}</div>
  }
}

import * as React from 'react';
import { observer } from 'mobx-react';
import { SquareModel } from '../../stores/square-model';
import * as s from './square.css';
import { Piece } from '../piece/piece';

interface ISquareProps {
  square: SquareModel;
}

interface ISquareState {
}

@observer
export class Square extends React.Component<ISquareProps, ISquareState> {

  getClasses(square: SquareModel) {
    const background = (square.getRow()%2 ^ square.getCol()%2) ? s.dark : s.bright;
    return `${s.square} ${background}`;
  }

  render() {
    const {square} = this.props;
    const piece = square.getPiece();
    return <div className={this.getClasses(square)}>{piece ? <Piece piece={piece}/> : null}</div>
  }
}

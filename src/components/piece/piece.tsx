import * as React from 'react';
import { observer } from 'mobx-react';
import { PieceModel } from '../../stores/piece-model';
import { PieceType } from '../../enums/piece-type';
import { PlayerColor } from '../../enums/player-color';
import * as s from './piece.css';

interface IPieceProps {
  piece: PieceModel;
}

interface IPieceState {
}

@observer
export class Piece extends React.Component<IPieceProps, IPieceState> {

  getPieceImageSource(piece: PieceModel) {
    const imgPath = 'assets';
    const imgExt = 'svg';
    let imgFilename;
    switch (piece.getType()) {
      case PieceType.BISHOP:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-bishop' : 'black-bishop';
        break;
      case PieceType.ROOK:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-rook' : 'black-rook';
        break;
      case PieceType.KNIGHT:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-knight' : 'black-knight';
        break;
      case PieceType.PAWN:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-pawn' : 'black-pawn';
        break;
      case PieceType.KING:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-king' : 'black-king';
        break;
      case PieceType.QUEEN:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-queen' : 'black-queen';
        break;
    }
    return `${imgPath}/${imgFilename}.${imgExt}`;
  }

  render() {
    return <div><img className={s.piece} src={this.getPieceImageSource(this.props.piece)} /></div>
  }
}

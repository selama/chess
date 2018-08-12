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

  getPieceImage(piece: PieceModel) {
    const imgPath = 'assets';
    const imgExt = 'svg';
    let imgFilename;
    let className;
    switch (piece.getType()) {
      case PieceType.BISHOP:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-bishop' : 'black-bishop';
        className = s.bishop;
        break;
      case PieceType.ROOK:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-rook' : 'black-rook';
        className = s.rook;
        break;
      case PieceType.KNIGHT:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-knight' : 'black-knight';
        className = s.knight;
        break;
      case PieceType.PAWN:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-pawn' : 'black-pawn';
        className = s.pawn;
        break;
      case PieceType.KING:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-king' : 'black-king';
        className = s.king;
        break;
      case PieceType.QUEEN:
        imgFilename =  piece.getColor() === PlayerColor.WHITE ? 'white-queen' : 'black-queen';
        className = s.queen;
        break;
    }
    return {
      src: `${imgPath}/${imgFilename}.${imgExt}`,
      className
    };
  }

  render() {
    const {src, className} = this.getPieceImage(this.props.piece)
    return <div><img className={className} src={src} /></div>
  }
}

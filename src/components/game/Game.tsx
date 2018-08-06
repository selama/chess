import * as React from 'react';
import * as s from './game.css';
import { Board } from '../board/Board';

interface IGameProps {
}

interface IGameState {
}

export class Game extends React.Component<IGameProps, IGameState> {

  render() {
    return <div className={s.container}>
      <div>lorem ipsum</div>
      <Board/>
    </div>;
  }
}

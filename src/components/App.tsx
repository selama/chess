import * as React from 'react';
import {Board} from './Board';

export const App = () => {
  return <div>
    <div>lorem ipsum</div>
    <Board gameState={{turn: 'white'}}/>
  </div>;
}

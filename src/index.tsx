import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'mobx-react';

import {Game} from "./components/game/Game";
import { GameStore } from "./stores/game-store";

const gameStore = new GameStore();

ReactDOM.render(
    <Provider gameStore={gameStore}>
        <Game/>
    </Provider>,
    document.getElementById("root")
);

import React from "react";
import { render } from "react-dom";
import PlayerComponent from "./components/player.component";
import ButtonComponent from "./components/button.component";
import DiceComponent from './components/dice.component'

const App = () => (
  <div className="wrapper clearfix">
    <PlayerComponent score={0} player={"Player 1"} currentScore={0} />

    <PlayerComponent score={0} player={"Player 2"} currentScore={0} />

    <ButtonComponent
      className={"btn-new"}
      label={"New game"}
      iconion={"ion-ios-plus-outline"}
    />
    <ButtonComponent
      className={"btn-roll"}
      label={"Roll Dice"}
      iconion={"ion-ios-loop"}
    />
    <ButtonComponent
      className={"btn-hold"}
      label={"Hold"}
      iconion={"ion-ios-download-outline"}
    />

    <DiceComponent dice={1}/>
    
  </div>
);

render(<App />, document.getElementById("root"));

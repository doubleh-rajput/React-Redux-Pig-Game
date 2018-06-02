import React from "react";
import PlayerComponent from "./components/player.component";
import ButtonComponent from "./components/button.component";
import DiceComponent from "./components/dice.component";
import { connect } from "react-redux";
import { ROLL_DICE, START_GAME, HOLD_DICE } from "./redux/actions";
import { rollDice } from "./helpers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dice: 1 };
  }

  rolldice = () => {
    this.setState({ dice: rollDice() }, () => {
      this.props.rolldice(this.state.dice);
    });
  };

  render() {
    const { gameLoaded, players } = this.props.game;

    return (
      <div className="wrapper clearfix">
        {players.map((player, key) => (
          <PlayerComponent
            key={key}
            isActive={player.isActive && gameLoaded}
            score={player.score}
            player={player.name}
            currentScore={player.currentScore}
          />
        ))}

        <ButtonComponent
          className={"btn-new"}
          label={"New game"}
          iconion={"ion-ios-plus-outline"}
          onClick={() => {
            this.props.newgame();
          }}
        />

        {gameLoaded && (
          <ButtonComponent
            className={"btn-roll"}
            label={"Roll Dice"}
            iconion={"ion-ios-loop"}
            onClick={() => {
              this.rolldice();
            }}
          />
        )}

        {gameLoaded && (
          <ButtonComponent
            className={"btn-hold"}
            label={"Hold"}
            iconion={"ion-ios-download-outline"}
            onClick={() => {
              this.props.hold();
            }}
          />
        )}

        {gameLoaded && <DiceComponent dice={this.state.dice} />}
      </div>
    );
  }
}

export default connect(
  store => {
    return {
      game: store.game,
      error: store.error
    };
  },
  dispatch => {
    return {
      newgame: () => {
        dispatch({ type: START_GAME, payload: {} });
      },
      rolldice: dice => {
        dispatch({ type: ROLL_DICE, payload: { dice } });
      },
      hold: () => {
        dispatch({ type: HOLD_DICE, payload: {} });
      }
    };
  }
)(App);

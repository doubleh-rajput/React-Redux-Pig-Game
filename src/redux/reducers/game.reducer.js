import { ROLL_DICE, HOLD_DICE, START_GAME } from '../actions';
import { newPlayer, WINNING_POINT } from '../../helpers';

export const DEFAULT_GAME_STATE = {
    players: [
        { name: 'Player 1', score: 0, currentScore: 0, isActive: false },
        { name: 'Player 2', score: 0, currentScore: 0, isActive: false }
    ],
    gameLoaded: false
};

export default function reducer(state = DEFAULT_GAME_STATE, action) {

    switch (action.type) {

        case START_GAME:
            let activePlayer = newPlayer();
            return {
                ...state,
                ...{
                    gameLoaded: true,
                    players: state.players.map((player, key) => {
                        player.isActive = (key === activePlayer);
                        player.score=0;
                        player.currentScore=0;
                        player.name = (key ===0) ? 'Player 1' : 'Player 2 ';

                        return player;
                    })
                }
            };

        case ROLL_DICE:
            const { dice } = action.payload;
            return {
                ...state,
                ...{
                    players: state.players.map((player, key) => {
                        if (dice === 1) {
                            player.currentScore = 0;
                            player.isActive = !player.isActive;
                        } else {
                            if (player.isActive) {
                                player.currentScore += dice;
                            }
                        }

                        return player;
                    })
                }
            };

        case HOLD_DICE:
            let gameLoaded = state.gameLoaded;
            let players = state.players.map((player, key) => {
                if (player.isActive) {
                    player.score += player.currentScore;
                    player.currentScore = 0;

                    if (player.score >= WINNING_POINT) {
                        player.name = 'Winner';
                        gameLoaded = false;
                    }
                }

                player.isActive = !player.isActive;

                return player;
            })

            return { ...state, ...{ players: players, gameLoaded: gameLoaded } };

        default:
            return state;
    }
}
import {combineReducers} from 'redux';
import error , {DEFAULT_ERROR_STATE} from './error.reducer';
import game, {DEFAULT_GAME_STATE} from './game.reducer';

export default combineReducers({
     error: error,
     game: game
});

export const DEFAULT_APP_STATE= {
    error : DEFAULT_ERROR_STATE,
    game: DEFAULT_GAME_STATE
}
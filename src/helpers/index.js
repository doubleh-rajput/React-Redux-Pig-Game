export const WINNING_POINT = 100;

/**
 * Choose Player 1 or 2
 */
export function newPlayer(){
    return  Math.round(Math.random());
}

/**
 * Roll Dice and select 1 to 6
 */
export function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

export function successBackground(score){
    let style;
    if(score < WINNING_POINT){
        style= {};
    }else{
        style= {backgroundImage: 'url("images/winner.png")' , backgroundRepeat: 'no-repeat' };
    }

    return style;
}
import React from 'react';

export default ({dice}) => {
  return <img alt="Dice" className="dice" src={`images/dice-${dice}.png`}/>
}
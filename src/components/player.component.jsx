import React from "react";

export default ({ score, player, currentScore }) => (
  <div className="player-0-panel">
    <div className="player-name" id="name-0">
      {player}
    </div>
    <div className="player-score" id="score-0">
      {score}
    </div>
    <div className="player-current-box">
      <div className="player-current-label">Current</div>
      <div className="player-current-score" id="current-0">
        {currentScore}
      </div>
    </div>
  </div>
);

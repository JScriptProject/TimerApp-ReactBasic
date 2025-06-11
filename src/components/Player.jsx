import React, { forwardRef } from "react";

const Player = forwardRef(function Player({ playerName, handleClick }, ref) {
    return (
        <div className="player-wrap">
            {playerName ? <h3>Welcome {playerName}</h3>: <h3>Please enter your name Below</h3>}
    
            <div className="input-block">
                <input type="text" ref={ref} />
                <button onClick={handleClick}>Set Name</button>
            </div>
        </div>
    );
});
export default Player;

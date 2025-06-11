import React, { useRef, useState } from "react";
import Player from "./components/Player";
import TimerChallange from "./components/TimerChallange";

function App() {
    const [playerName, setPlayerName] = useState(null);
    const player = useRef();

    function handleClick() {
        setPlayerName(player.current.value);
    }
    return (
        <>
            <Player
                ref={player}
                handleClick={handleClick}
                playerName={playerName}
            />
            <div className="timecards">
                <TimerChallange level="Easy" time={1} playerName={playerName} />
                <TimerChallange
                    level="Difficult"
                    time={5}
                    playerName={playerName}
                />
                <TimerChallange
                    level="getting tough"
                    time={10}
                    playerName={playerName}
                />
                <TimerChallange
                    level="pros only"
                    time={15}
                    playerName={playerName}
                />
            </div>
        </>
    );
}

export default App;

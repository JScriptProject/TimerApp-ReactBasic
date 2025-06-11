import React, { useRef, useState } from "react";
import Result from "./Result";

function TimerChallange({ level, time, playerName }) {
    const [remainingTime, setRemainingTime] = useState(time * 1000);
    const timer = useRef();
    const dialog = useRef();
    let timerActive = remainingTime > 0 && remainingTime < time * 1000;

    // timer started here
    function onStart() {
        timer.current = setInterval(() => {
            setRemainingTime((prevTime) => {
                return prevTime - 10;
            });
        }, 10);
    }

    // timer stopped here manual
    function onStop() {
        clearInterval(timer.current);
        showModal();
    }

    // timer stoped here as timeout
    if (!timerActive && remainingTime <= 0) {
        clearInterval(timer.current);
        showModal();
    }
    function showModal() {
        dialog.current.display();
    }
    
    function resetGame()
    {
        setRemainingTime(time*1000);
    }

    return (
        <>
            <Result remainingTime={remainingTime} time={time*1000} ref={dialog} playerName ={playerName} resetGame={resetGame} />
            <section className="timer-block">
                <h2>{level}</h2>
                <p className="time-card">
                    {time} second{time > 1 ? "s" : ""}
                </p>
                <form method="dialog">
                    <button onClick={timerActive ? onStop : onStart}>
                        {timerActive ? "Stop Timer" : "Start Timer"}
                    </button>
                </form>
                <p className="timer-p">{timerActive ? "Time is running.." : "Timer inactive"} </p>
            </section>
        </>
    );
}

export default TimerChallange;

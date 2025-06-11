import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";

const Result = forwardRef(function Result({ remainingTime, time, playerName,resetGame }, ref) {
    const dialog = useRef();
  
    const winResult = remainingTime > 0 && remainingTime!== time;
    console.log(remainingTime);
    console.log(time);
    const score = Math.round(100-((remainingTime/time)*100));

    useImperativeHandle(ref, () => {
        return {
            display() {
                dialog.current.showModal();
            },
        };
    });
    return createPortal(
        <dialog className="result" ref={dialog} onClose={resetGame}>
            <div className="result-wrap">
                <h2>{winResult ? "YOU WIN": "YOU LOSE"} {playerName ?? "" }</h2>

                {winResult ? <p>Time Remaining {remainingTime/1000} seconds and you stopped timer</p>: <p>Time Remaining {remainingTime} you unable to stop timer.</p>}
                {winResult ? <p>Your Score is {score}%</p> : <p>Your score is 0</p> }
                <form method="dialog">
                    <button>Close</button>
                </form>
            </div>
        </dialog>,
        document.getElementById("modal")
    );
});

export default Result;

import CahCard from "./CahCard";
import "./CahBoard.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CahBoard = ({ answers }) => {

    const [revealed, setRevealed] = useState(() => answers.map(() => false));

    useEffect(() => {
        setRevealed(answers.map(() => false));
        setWinnerIndex(null);
    }, [answers.length]);

    const [winnerIndex, setWinnerIndex] = useState(null);

    const allRevealed = revealed.every(Boolean);

    const handleReveal = (index) => {
        setRevealed((prev) => 
            prev.map((rev, i) => (i === index ? true : rev))
        );
    }

    const handleWinnerSelect = (index) => {
        if (!allRevealed){
            console.log("Not all cards revealed");
            toast.warning("All cards must be revealed before selecting a winner.");
            return;
        }
        setWinnerIndex(index);
    }

    return (
        <div>
            <div className="cah-board">
                {answers.map((answer, index) => (
                    <CahCard 
                        key={index} 
                        text={answer}
                        revealed={revealed[index]} 
                        isWinner={winnerIndex === index}
                        onReveal={() => handleReveal(index)}
                        onSelectWinner={() => handleWinnerSelect(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CahBoard;
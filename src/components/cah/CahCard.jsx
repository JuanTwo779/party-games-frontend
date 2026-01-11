import "./CahCard.css";

const CahCard = ({ text, revealed, isWinner, onReveal, onSelectWinner }) => {

    const handleClick = () => {
        if (!revealed) {
            onReveal();
        } else if (!isWinner) {
            onSelectWinner();
        }
    };

    return (
        <div 
            className={`cah-card 
                ${revealed ? 'revealed' : ''} 
                ${isWinner ? 'winner' : ''}`}
            onClick={handleClick}
        >
            {!revealed ? (
                <div className="cah-card-back"> Click to Flip </div>
            ) : (
                <div className="cah-card-front">{text}</div>   
            )}

        </div>
    );
}

export default CahCard;
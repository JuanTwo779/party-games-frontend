import { Link } from "react-router-dom";

function GameCard({ title, description, playerPath, hostPath, disabled }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: 20,
      marginBottom: 15,
      opacity: disabled ? 0.5 : 1
    }}>
      <h3>{title}</h3>
      <p>{description}</p>

      {!disabled && (
        <>
          <Link to={playerPath}>
            <button>Play</button>
          </Link>
          {" "}
          <Link to={hostPath}>
            <button>Host</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default GameCard;

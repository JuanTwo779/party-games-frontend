import { useState } from "react";
import { submitCahAnswer } from "../../services/api";

function Player() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("");

  const submit = async () => {
    if (!answer.trim()) {
      setStatus("Answer cannot be empty ❌");
      return;
    }
    try {
      await submitCahAnswer(answer);
      setAnswer("");
      setStatus("Submitted anonymously ✅");
    } catch (error) {
      setStatus("Failed to submit answer ❌");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Write your answer</h2>
      <textarea
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        rows={4}
        cols={30}
      />
      <br /><br />
      <button onClick={submit}>Submit</button>
      {status && <p>{status}</p>}
    </div>
  );
}

export default Player;

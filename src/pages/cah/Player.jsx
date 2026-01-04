import { useState } from "react";

function Player() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("");

  const submit = async () => {
    await fetch("endpoint to send answers to backend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer })
    });

    setAnswer("");
    setStatus("Submitted anonymously ✅");
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
      <p>{status}</p>
    </div>
  );
}

export default Player;

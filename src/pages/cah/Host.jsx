import { useEffect, useState } from "react";

function Host() {
  const [answers, setAnswers] = useState([]);

  const load = async () => {
    const res = await fetch("endpoint to retrieve answers from backend");
    setAnswers(await res.json());
  };

  const clear = async () => {
    await fetch("endpoint to clear answers", { method: "POST" });
    load();
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Answers</h2>
      <ul>
        {answers.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
      <button onClick={clear}>New Round</button>
    </div>
  );
}

export default Host;

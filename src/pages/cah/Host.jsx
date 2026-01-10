import { useEffect, useState } from "react";
import { getCahAnswers, clearCah } from "../../services/api";

function Host() {
  const [answers, setAnswers] = useState([]);

  const load = async () => {
    try {
      const res = await getCahAnswers();
      setAnswers(res);
    } catch (error) {
      console.error("Failed to load answers", error);
    }
  };

  const clear = async () => {
    try {
      await clearCah() ;
      load();
    } catch (error) {
      console.error("Failed to clear answers", error);
    }
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

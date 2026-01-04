const BASE_URL = "http://localhost:8080/api";

export const submitCahAnswer = (answer) =>
  fetch(`${BASE_URL}/cah/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answer })
  });

export const getCahAnswers = () =>
  fetch(`${BASE_URL}/cah/answers`).then(res => res.json());

export const clearCah = () =>
  fetch(`${BASE_URL}/cah/clear`, { method: "POST" });

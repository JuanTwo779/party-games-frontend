const BASE_URL = "http://localhost:8080/api";

// Submit an answer for Cards Against Humanity
export const submitCahAnswer = async (answer) => {
  const response = await fetch(`${BASE_URL}/cah/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answer }),
  });

  if (!response.ok) {throw new Error("Failed to submit answer");}
  return response.json();
}

export const getCahAnswers = () =>
  fetch(`${BASE_URL}/cah/answers`).then(res => res.json());

export const clearCah = () =>
  fetch(`${BASE_URL}/cah/clear`, { method: "POST" });

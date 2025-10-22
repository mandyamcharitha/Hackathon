export const getPredictedSpeciality = async (description) => {
  const response = await fetch(
    `http://localhost:8000/predict?description=${encodeURIComponent(description)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = response.json();
  return data
};

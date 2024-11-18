export const BASE_URL = "/discovery/v2/events.json";

export const getPlaysData = (date = "", location = "") => {
  const queryParams = new URLSearchParams();
  queryParams.append("classificationName", "theatre");
  queryParams.append("apikey", "wPq0ER3t8muFGyjlddz7FysKPr0XVZQM");

  if (date) queryParams.append("startDateTime", `${date}T00:00:00Z`); 
  if (location) queryParams.append("city", location); 

  return fetch(`${BASE_URL}?${queryParams.toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      return data._embedded?.events || [];
  })
  .catch((error) => {
    console.error("Error en la solicitud:", error);
    throw error;
  });
}
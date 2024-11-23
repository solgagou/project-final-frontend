export const BASE_URL = "/discovery/v2/events.json";

export const getDefaultPlaysData = () => {
  const queryParams = new URLSearchParams();
  queryParams.append("classificationName", "theatre");
  queryParams.append("apikey", "wPq0ER3t8muFGyjlddz7FysKPr0XVZQM");
  queryParams.append("sort", "date,asc");

  return fetch(`/discovery/v2/events.json?${queryParams.toString()}`, {
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
      throw new Error("Lo sentimos, algo ha salido mal.");
    });
};


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
    console.error(
      "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.",
      error
    );
    throw new Error(
      "Lo sentimos, algo ha salido mal. Por favor, inténtalo más tarde."
    );
  });
};


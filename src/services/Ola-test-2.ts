const url = "https://journeyplanner.integration.sl.se/v2/trips";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP-fel: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Fetch-fel:", error);
  });

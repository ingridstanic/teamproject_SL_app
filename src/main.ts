import { createHtml } from "./html";
import type { Trip } from "./models/Trip";
import "./style.css";

const success = (pos: GeolocationPosition) => {
  console.log(pos.coords);
};

const error = (error: GeolocationPositionError) => {
  console.log(error.message);
};

navigator.geolocation.getCurrentPosition(success, error);


//fetch
document.getElementById("journeySearch")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("destinationInput");
  if (!theInput) return;

  const searchText = (theInput as HTMLInputElement).value;

  const response = await fetch(
    "https://journeyplanner.integration.sl.se/v2/trips?type_origin=any&type_destination=any&name_origin=9091001000009182&name_destination=9091001000009192&calc_number_of_trips=3" + searchText
  );
  const data: Trip = await response.json();
  console.log(data);

  createHtml(data);
}); 
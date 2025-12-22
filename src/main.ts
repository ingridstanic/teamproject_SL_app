import { createHtml } from "./html";
import "./style.css";

const success = (pos: GeolocationPosition) => {
  console.log(pos.coords);
};

const error = (error: GeolocationPositionError) => {
  console.log(error.message);
};

navigator.geolocation.getCurrentPosition(success, error);

document.getElementById("journeySearch")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const destinationInput = document.getElementById("destinationInput");
  if (!destinationInput) return;

  // const destination = (destinationInput as HTMLInputElement).value;

  // const data = await getJourney(destination);

  // createHtml(data.journey);

  //har kommenterat ut detta, behöver justeras när fetch finns
});

import { createHtml } from "./html";
import { getJourney } from "./services/getJourney";
import { getStopInfoFromUser } from "./services/getStop";
import "./style.css";

let coordsLong = 0;
let coordsLat = 0;

const success = async (pos: GeolocationPosition) => {
  coordsLong = pos.coords.longitude;
  coordsLat = pos.coords.latitude;

  const data = await getStopInfoFromGeoLocation(
    `${coordsLong.toFixed(5)}:${coordsLat.toFixed(5)}:WGS84[dd.ddddd]`
  );

  console.log(data);
};

const error = (error: GeolocationPositionError) => {
  console.log(error.message);
};

navigator.geolocation.getCurrentPosition(success, error);

document
  .getElementById("journeySearch")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const destInput = document.getElementById("destinationInput");
    if (!destInput) return;

    const destination = (destInput as HTMLInputElement).value;

    await getStopInfoFromUser(destination);

    await getJourney(
      `${coordsLong.toFixed(5)}:${coordsLat.toFixed(5)}:WGS84[dd.ddddd]`,
      "9091001000009112"
    );

    // createHtml(data.journey);
  });

import type { StopFind } from "../models/StopFind";
import type { Trip } from "../models/Trip";
import { getJourney } from "../services/getJourney";

export const createHtml = (trip: Trip) => {
  const section = document.getElementById("journeyContainer"); // original id resa

  if (section) {
    section.innerHTML = "";
  }

  trip.journeys.forEach((journey) => {
    journey.legs.forEach((leg) => {
      //forEach nested. rätt
      //har inte haft tid att fixa innehållet.

      const name = document.createElement("h2");
      name.innerHTML = leg.leg.name;

      name.appendChild(name);
    });
  });
};

export const createHtmlSugs = (
  suggestion: StopFind,
  lat: number,
  lng: number
) => {
  const sugs = document.getElementById("sugsContainer");

  if (sugs) {
    sugs.innerHTML = "";
  }

  suggestion.locations.forEach((sug) => {
    const dest = document.createElement("li");

    dest.innerHTML = sug.disassembledName;
    dest.addEventListener("click", async () => {
      await getJourney(
        `${lng.toFixed(5)}:${lat.toFixed(5)}:WGS84[dd.ddddd]`,
        sug.id
      );
    });

    sugs?.appendChild(dest);
  });
};

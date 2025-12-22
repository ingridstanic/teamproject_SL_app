import type { Trip } from "./models/Trip";


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



    })
 });


};

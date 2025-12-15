import { get } from "./slLists";
import "./style.css";
import type { TripResponse } from "./types";

const data = await get<TripResponse>(
  "https://journeyplanner.integration.sl.se/v2/trips?type_origin=any&type_destination=any&name_origin=9091001000009182&name_destination=9091001000009192&calc_number_of_trips=3"
);
console.log(data.journeys);

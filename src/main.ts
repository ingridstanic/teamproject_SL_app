import "./style.css";
import { get } from "./slLists";
import type { TripResponse } from "./types";

// url api
const BASE_URL =
  "https://journeyplanner.integration.sl.se/v2/trips?type_origin=any&type_destination=any&name_origin=9091001000009182&name_destination=9091001000009192&calc_number_of_trips=3";

const loadTrips = async () => {
  try {
    const data = await get<TripResponse>(BASE_URL);
    console.log(data.journeys);
  } catch (error) {
    console.error(error);
  }
};

loadTrips();
//

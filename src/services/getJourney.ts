import type { Trip } from "../models/Trip";

export const getJourney = async (originID: string, destinationID: string) => {
  const response = await fetch(
    "https://journeyplanner.integration.sl.se/v2/trips?type_origin=coord&type_destination=any&name_origin=" +
      originID +
      "&name_destination=" +
      destinationID +
      "&calc_number_of_trips=3"
  );

  const data: Trip = await response.json();

  return data;
};

const BASE_URL =
  "https://journeyplanner.integration.sl.se/v2/trips?type_origin=any&type_destination=any&name_origin=9091001000009182&name_destination=9091001000009192&calc_number_of_trips=3";

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed ");
  }
  const data: T = await response.json();

  return data;
};

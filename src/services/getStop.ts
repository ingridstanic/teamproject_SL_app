export const getStopInfoFromUser = async (search: string) => {
  const response = await fetch(
    "https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=" +
      search +
      "&any_obj_filter_sf=2&type_sf=any"
  );

  const data: Trip = await response.json();

  return data;
};

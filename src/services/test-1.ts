async function testJourneyPlanner() {
  const url =
    "https://journeyplanner.integration.sl.se/v2/trips" +
    "?type_origin=any" +
    "&type_destination=any" +
    "&name_origin=9091001000009182" +
    "&name_destination=9091001000009192" +
    "&calc_number_of_trips=3";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP-fel: ${response.status}`);
    }

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Fel vid fetch:", error);
  }
}

testJourneyPlanner();

export type Location = {
  id?: string; // valfritt
  name: string;
};

export type Leg = {
  origin: Location;
  destination: Location;
  departureTime?: string;
  arrivalTime?: string;
};

export type Journey = {
  id?: string; // valfritt
  tripDuration: string;
  tripRtDuration: string;
  legs: Leg[]; // fortsättning vet inte????
};

export type TripResponse = {
  journeys: Journey[];
};

export type Coord = {
  lat: number;
  lon: number;
};

export type Origin = {
  id: string;
  name: string;
  coord: Coord;
};

export type Destination = {
  id: string;
  name: string;
};

export type Leg = {
  origin: Origin;
  destination: Destination;
  departureTime?: string;
  arrivalTime?: string;
};

export type Journey = {
  id: string;
  tripDuration: number;
  tripRtDuration: number;
  legs: Leg[];
};

export type TripResponse = {
  journeys: Journey[];
};

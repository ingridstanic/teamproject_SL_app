import "./style.css";

const success = (pos: GeolocationPosition) => {
  console.log(pos.coords);
};

const error = (error: GeolocationPositionError) => {
  console.log(error.message);
};

navigator.geolocation.getCurrentPosition(success, error);

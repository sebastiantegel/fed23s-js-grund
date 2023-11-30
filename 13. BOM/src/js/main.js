import "./../scss/style.scss";

document.getElementById("startTimeout").addEventListener("click", () => {
  setTimeout(() => {
    alert("Nu har det gått tre sekunder");
  }, 3000);
});

let i = 0;
let intervalId = 0;
document.getElementById("startInterval").addEventListener("click", () => {
  intervalId = setInterval(() => {
    document.getElementById("result").innerHTML = i;
    i++;
  }, 1000);
});

document.getElementById("stopInterval").addEventListener("click", () => {
  clearInterval(intervalId);
  i = 0;
});

document.getElementById("getPosition").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Uppdatera webbläääääsaren!!");
  }
});

const onSuccess = (position) => {
  console.log(
    "Lat:",
    position.coords.latitude,
    "Lng:",
    position.coords.longitude
  );
};

const onError = (error) => {
  console.log(error);
};

let watchId = 0;
document.getElementById("startGetPositions").addEventListener("click", () => {
  if (navigator.geolocation) {
    watchId = navigator.geolocation.watchPosition(onWatchSuccess, onError);
  } else {
    alert("Uppdatera webbläääääsaren!!");
  }
});

document.getElementById("stopGetPositions").addEventListener("click", () => {
  navigator.geolocation.clearWatch(watchId);
});

class Position {
  lat;
  lng;

  constructor(lat, lng) {
    this.lat = lat;
    this.lng = lng;
  }
}

const positions = [];
const onWatchSuccess = (position) => {
  const currentPosition = new Position(
    position.coords.latitude,
    position.coords.longitude
  );

  positions.push(currentPosition);

  console.log(positions);
};

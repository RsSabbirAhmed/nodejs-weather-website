const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?limit=1types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1IjoicnNzYWJiaXIiLCJhIjoiY2p3Mjc5dzNkMHRvcTQ1bW1nb2c3NHpleCJ9.4D9Y8panRmaoZpHPPjc0ZA";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "Unable to connect to location services!!!(Check your network connection)",
        undefined
      );
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search !!!", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;

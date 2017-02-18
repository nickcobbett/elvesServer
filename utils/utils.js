var fs = require('fs');

var parseCoords = function(requestBody) {
  // console.log('*****', requestBody)
  // var coords = {
  //   lat: requestBody.location.coords.latitude,
  //   long: requestBody.location.coords.longitude,
  //   accuracy: requestBody.location.coords.accuracy,
  //   speed: requestBody.location.coords.speed,
  //   timestamp: requestBody.location.timestamp
  // }

  var coords = requestBody.location.coords.latitude + ',' +
    requestBody.location.coords.longitude + ',' +
    requestBody.location.coords.accuracy + ',' +
    requestBody.location.coords.speed + ',' +
    requestBody.location.timestamp + '\n';

  fs.appendFile('coords.txt', coords, (err, success) => {
    if (err) {
      console.log('error')
    } else {
      console.log('The "data to append" was appended to file!');
    }
  })

}

module.exports = parseCoords;

// my ip 10.7.25.106


// var coord = {"location":{"coords":{"speed":1.54,"longitude":-122.03038642,"latitude":37.33182081,"accuracy":10,"heading":-1,"altitude":0,"altitudeAccuracy":-1},"is_heartbeat":false,"is_moving":true,"odometer":66634.3,"uuid":"E952A20F-79AD-42F4-92D6-156AD58D73E6","activity":{"type":"unknown","confidence":100},"battery":{"level":-1,"is_charging":false},"timestamp":"2017-02-17T22:16:47.207Z"},"auth_token":"maybe_your_server_authenticates_via_token_YES?"}

// var lat = coord.location.coords.latitude
// var long = coord.location.coords.longitude
// var accuracy = coord.location.coords.accuracy
// var speed = coord.location.coords.speed;
// var timestamp = coord.location.timestamp;
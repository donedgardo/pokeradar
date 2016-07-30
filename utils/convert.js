'use strict';

var data = JSON.parse(JSON.stringify(require('./demo.data.json')));

// Where the sample data was gathered
var loc = {
  latitude: 40.36915523640919
, longitude: -111.75098587678943
, lat: 40.369155
, lng: -111.750985
};
// When the data was gathered
var ms = 1469158098603;

//var msMax = 0;
//var msMin = Infinity;

data.pokemons.forEach(function (pokemon) {
  pokemon.latitude -= loc.latitude;
  pokemon.longitude -= loc.longitude;
  pokemon.disappear_time -= ms;

  // How to determine when the data was gathered
  //msMax = Math.max(msMax, pokemon.disappear_time);
  //msMin = Math.min(msMin, pokemon.disappear_time);
  // assume around 10 % are already expired
  //ms = (msMin - ((msMax - msMin) / 10))
});
data.gyms.forEach(function (gym) {
  gym.latitude = parseFloat((gym.latitude - loc.lat).toFixed(7), 10);
  gym.longitude = parseFloat((gym.longitude - loc.lng).toFixed(7), 10);
});
data.pokestops.forEach(function (gym) {
  gym.latitude = parseFloat((gym.latitude - loc.lat).toFixed(7), 10);
  gym.longitude = parseFloat((gym.longitude - loc.lng).toFixed(7), 10);
  gym.lure_expiration = gym.lure_expiration && (gym.lure_expiration - ms) || null;
});

//console.log('times');
//console.log(msMax, msMin, Math.round((msMax - msMin) / 1000));
//console.log('data');
console.log(JSON.stringify(data, null, '  '));

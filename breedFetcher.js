const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //since body is in string we will parse it to JSON object
    let desc = null;
    if (!error) {
      const data = JSON.parse(body); // moving this inside the if(!error) block because body is undefined when there is an error.
      if (data.length === 0 || data.keys === undefined) { // edge case. if search is invalid body return an empty array
        error = "your search is invalid - Breed not found";
      } else {
        desc = data[0].description;
      }
    }
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };
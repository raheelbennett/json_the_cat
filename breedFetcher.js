const request = require('request');

const search = process.argv.slice(2)[0]; // allows user commandline argument entry

//console.log(typeof search); // to check to make sure the input is just a string

request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, (error, response, body) => {
  if (error) {  //edge case
    console.log(error);
    return;
  }
  // console.log(typeof body); //shows string
  //since body is in string we will parse it to JSON object
  const data = JSON.parse(body);
  //console.log(data);
  if (data.length === 0) { // edge case. if search is invalid body return an empty array
    console.log("your search is invalid - Breed not found");
    return;
  }
  //console.log(typeof data); //shows object now

  //Access the first entry in the data array and print out the description for the user.
  console.log(data[0].description);
});


const { fetchBreedDescription } = require('./breedFetcher');

const search = process.argv.slice(2)[0]; // allows user commandline argument entry


fetchBreedDescription(search, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
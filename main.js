// JavaSript code here

// Line 4 is just there to make sure that this file is linked.
// alert('How are you?');

const artwork = ["https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=2&fields=id,title,image_id"];
const blindArt = () => Math.random() >= 0.5;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (blindArt()) {
        resolve(artwork);
      } else {
        reject('There was a problem with the server, please try again.');
      }
    }, 500);
  });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil();
  max = Math.floor();
  return Math.floor(Math.random() * 40) + 1);
}

async function getArtwork() {
  console.log("initiating async call...");
  const result = await getData().catch((err) => console.log(`ERR: ${err}`));
  console.log(result);
}

getArtwork();

//Need to get an array of data for the artist name field from the API. Need to populate a single art image for each round/question, randomly. Need to show image with 4 options to choose from of artist names to match the artist name to the image shown.


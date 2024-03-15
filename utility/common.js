const apiKey = process.env.TMDB_API_KEY;

function isObjectEmpty(obj) {
  if(typeof obj === "undefined"){
    return true;
  }
  return false;
}

module.exports = {apiKey,isObjectEmpty};

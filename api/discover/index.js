const axios = require('axios');
const url = require('url');
const querystring = require('querystring');

const apiKey = process.env.TMDB_API_KEY;
// const apiKey = process.env.TMDB_API_KEY;

module.exports = async (req, res) => {
  const { url: requestUrl, body } = req;
  const parsedUrl = url.parse(requestUrl);
  const query = querystring.parse(parsedUrl.query);

  const tmdbUrl = `https://api.themoviedb.org/3/discover/${query.type || body.type}\
?include_adult=${query.include_adult || body.include_adult}\
&language=${query.language || body.language}\
&page=${query.page || body.page}\
&sort_by=${query.sort_by || body.sort_by}\
&api_key=${apiKey}`;
  try {
    const response = await axios.get(tmdbUrl);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from TMDb API');
  }
};
